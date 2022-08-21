import { Link } from 'react-router-dom';
import { themeActions, useForm } from '../../context/ThemeContext'
import { useAppSelector } from '../../hooks/storeHook';
import * as C from './style'

const Header = () => {

    const { state, dispatch } = useForm();

    const favorite = useAppSelector(state=> state.favorite.count);


    const handleTheme = () => {
        dispatch({
            type: themeActions.setTheme,
            payload: state.theme === 'light' ? 'dark' : 'light'
        })
    }

    return <>
        <C.Header>
            <div className='container'>
                <Link to={'/'}>
                    <h1 >Where in the World</h1>
                </Link>
                <Link className='favorite' to={'/favorite'}>Favorite{favorite !== 0 && <span>{favorite}</span>}</Link>
                <Link to={'/weather'}>Weather</Link>
                <button onClick={() => handleTheme()}>
                    <p> {`${state.theme === 'light' ? 'dark' : 'light'} mode`}</p>
                </button>
            </div>
        </C.Header>
    </>
}


export default Header;