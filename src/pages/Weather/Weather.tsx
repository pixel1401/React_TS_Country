import { useEffect, useState, useRef } from "react"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useLazyGetCountryQuery } from "../../api/countryApi";
import CardWeather from "../../components/CardWeather";
import { useLazyGetWeatherQuery } from "../../api/weatherApi";
import useDebounce from "../../hooks/useDebounce";
import { makeStyles, createStyles } from '@mui/styles';




const useStyles = makeStyles((theme: any) => ({
    root: {
        "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
            // Default transform is "translate(14px, 20px) scale(1)""
            // This lines up the label with the initial cursor position in the input
            // after changing its padding-left.
            transform: "translate(34px, 20px) scale(1);"
        }
    },
    inputRoot: {
        color: "purple",
        // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
        '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
            // Default left padding is 6px
            color : "var(--color-text)"
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--color-text)",
            color : "var(--color-text)"
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
            // borderColor: "green"
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            // borderColor: "purple"
        }
    }
}));





export default function WeatherPage() {
    const [counties, setCounties] = useState<ICountries[]>([{ code: 'KZ', label: 'Almaty' },
    { code: 'KZ', label: 'Aktobe' },]);
    const [fetchWeather , {data : dataWeather , isLoading : isLoadWeather , isError : isErrorWeather }] = useLazyGetWeatherQuery();
    const [fetchRepos, { isLoading: isLoadCountry, data: dataCountry }] = useLazyGetCountryQuery()
    const debounce = useDebounce(fetchRepos, 500);


    let arr: ICountries[] = [];

    useEffect(() => {
        if (dataCountry == undefined) return;
        
        for (let a = 0; a < dataCountry.features.length; a++) {
            let val = dataCountry.features[a].properties ?? undefined;
            val && arr.push({ code: val.country_code.toUpperCase() ?? val.state_code, label: val?.name ?? val?.country })
        }
        
        
        setCounties(prev => {
            arr = arr.concat(prev);
            arr = arr.filter((v, i, a) => a.findIndex(t => (t.label === v.label && t.label === v.label)) === i);
            return arr;
        }
        );

    }, [dataCountry])



    function getWeather (name : string) {
        fetchWeather(name);
    }


    function getCountry(name : string) {
        const value =  name;
        if (value.length < 3) return;
        debounce(value)
    }


    interface ICountries {
        id?: number,
        label: string,
        code: string,
        suggested?: boolean;
    }

    const classes = useStyles();

    return (
        <div>
            <div style={{margin:10}}>
                <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 300 }}
                    classes={classes} 
                    options={counties}
                    autoHighlight
                    
                    onChange={(event: any, value: ICountries | any) => getWeather(value.label)}
                    getOptionLabel={(option) => option.label}
                    
                    renderOption={(props, option) => (

                        <Box component="li" key={option.code} sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            <img
                                loading="lazy"
                                width="20"
                                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt="flag"
                            />
                            <p>{option.label}</p>
                        </Box>


                    )}
                    renderInput={(params) => (
                        <TextField
                            {...params}

                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => getCountry(e.target.value)}
                            
                            style={{ color: 'var(--color -text)' }}
                            label="Choose a country"
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                            }}
                        />
                    )}
                />

                <div>{isErrorWeather && <span>DATA weather not found</span>}</div>
            </div>
            

                        {
                dataWeather && <CardWeather {...dataWeather} />
                        }
        
                        
        </div>

    )
}


