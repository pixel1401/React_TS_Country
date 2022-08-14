import { Link } from "react-router-dom";
import { useForm } from "../../context/ThemeContext";
import { IAllCountry } from "../../types/IAllCountry"
import { ICountryItem } from "../../types/ICountryItem";
import * as C from './style';


export const CountryItem = ({name , flags , region , capital , population}: IAllCountry | ICountryItem) => {
    const {state , dispatch} = useForm();

    return (
    <Link to={`/country/${name}`}>
        <C.ContainerCountry theme={state.theme} >
            <div className="img">
                <img src={`${flags.png}`} alt="flags" />
            </div>
            <div className="info__box">
                <p className="info__name">{name}</p>
                {/* <p className="info__lang">{`${item.languages}`}</p> */}
                    <p className="info__region">{region} {capital}</p>
                <p className="info__population">{population}</p>
            </div>
        </C.ContainerCountry>
    </Link>
    )
}