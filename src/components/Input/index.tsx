import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import * as C from './style';


interface IInput {
    value: string;
    setFilter: (e: string) => void;
}


export const Input = ({ value, setFilter }: IInput) => {

    const [InputValue, setValue] = useState('');

    const debounced = useDebounce(setFilter, 800);


    const handleInput = (e: string) => {
        setValue(e);
        debounced(e);
    }


    return <>
        <C.Input>
            <input
                value={InputValue}
                onChange={(e) => handleInput(e.target.value)}
                type="text"
                placeholder='Search by Country'

            />
            <select name="" id="" onChange={(e) => handleInput(e.target.value)}>
                <option value='' selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </C.Input>

    </>
}