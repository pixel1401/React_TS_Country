import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../../api';
import { ICountryItem } from '../../types/ICountryItem';
import * as G from '../../globalStyle';
import * as C from './style';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const CountryPage = ()=> {

    const {name , code} = useParams();
    const navigate = useNavigate();
    const [countryData, setCountryData] = useState<ICountryItem | null>();
    const [isError , setError] = useState(false);

    const getData = async ()=> {
        let data : ICountryItem[] = name ?  await get.getCountry(name ?? '') : await get.getCountryByCode(code ?? '') ;
        if(data === null) {
            return setError(true);
        }
        const a = data[0];
        setCountryData(a);
    }

    useEffect(()=> {
        getData();
    } , [name , code])

    
    if(isError) {
        return <>
            <div>
                Eror BLYA;
            </div>
        </>
    }else  
    return (

        <>
            {countryData == null  && <G.Loader></G.Loader>}

            <button onClick={() => navigate(-1)} className='back'>Back</button>
            {
                countryData !== null && <>
                    <C.CountryItem>
                        <div className='flag'>
                            <img src={`${countryData?.flags.png}`} alt="flagItem" />
                        </div>
                        <div className='info'>
                            <h2 className='title'>{countryData?.name}</h2>
                            <div className='info__grid'>
                                <div className='info__grid-item'>Native name: <span className='info__grid-value'>{countryData?.nativeName}</span></div>
                                <div className='info__grid-item'>Region: <span className='info__grid-value'>{countryData?.region}</span></div>
                                <div className='info__grid-item'>Population: <span className='info__grid-value'>{countryData?.population}</span></div>
                                <div className='info__grid-item'>Subregion: <span className='info__grid-value'>{countryData?.subregion}</span></div>
                                <div className='info__grid-item'>Capital: <span className='info__grid-value'>{countryData?.capital}</span></div>
                                <div className='info__grid-item'>Top leval Domian: <span className='info__grid-value'>{countryData?.topLevelDomain}</span></div>
                                <div className='info__grid-item'>Languages: <span className='info__grid-value'>{countryData?.languages.map(e => ` ${e.name}`)}</span></div>
                            </div>
                            <div className='info__border'>
                                {countryData?.borders && countryData?.borders.map((e, index) => <Link key={index} to={`/code/${e}`}>{e}</Link>)}
                            </div>
                        </div>
                    </C.CountryItem>
                </>

                
            }
        </>
        
    )
}