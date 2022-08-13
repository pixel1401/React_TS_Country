import { themeActions, useForm } from '../../context/ThemeContext'
import * as C from './style'

const Header = () => {

    const { state, dispatch } = useForm();



    const handleTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }

    return <>
        <C.Header>
            <div className='container'>
                <h1 >Where in the World</h1>
                <button onClick={() => handleTheme()}>
                    <p> {`${state.theme === 'light' ? 'dark' : 'light'} mode`}</p>
                </button>
            </div>
        </C.Header>
    </>
}


export default Header;