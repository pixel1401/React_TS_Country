import * as C from './style';

export const Input = ()=> {
    return <>
        <C.Input>
            <input type="text" placeholder='Search by Country' />
            <select name="" id="">
                <option value="Fliter by Region" disabled selected>Fliter by Region</option>
            </select>
        </C.Input>

    </>
}