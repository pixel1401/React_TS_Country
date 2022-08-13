import { Link } from "react-router-dom";
import { useForm } from "../../context/ThemeContext";
import { IAllCountry } from "../../types/IAllCountry"
import * as C from './style';


export const CountryItem = (item: IAllCountry) => {
    const {state , dispatch} = useForm();

    return (
    <Link to={`country/${item.name}`}>
        <C.ContainerCountry theme={state.theme} >
            <div className="img">
                <img src={`${item.flags.png}`} alt="flags" />
            </div>
            <div className="info__box">
                <p className="info__name">{item.name}</p>
                {/* <p className="info__lang">{`${item.languages}`}</p> */}
                    <p className="info__region">{item.region} {item.capital}</p>
                <p className="info__population">{item.population}</p>
            </div>
        </C.ContainerCountry>
    </Link>
    )
}