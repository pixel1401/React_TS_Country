import { Certificate } from 'crypto'
import {createContext , useContext , useReducer} from 'react'
import { changeCssVaribals } from '../service/globalCssStyle'

const KEY_THEME = 'theme';


interface State {
    theme : string
}

interface Actions {
    type : themeActions,
    payload : any
}




const initialData : State  = 
{
    theme : localStorage.getItem(KEY_THEME)  ?? 'light'
}


interface ContextType {
    state : State,
    dispatch : (action : Actions) => void;
}

const ThemeContext = createContext <ContextType | undefined> (undefined);


export enum themeActions {
    setTheme
}



export const reducer = (state : State , action : Actions) =>  {
    switch (action.type) {
        case themeActions.setTheme:
            return {...state , theme : action.payload}
            break;
        
    }
}

interface Provider {
    children : JSX.Element;
}

export const ThemeProvider = ({children} : Provider) => {
    const [state , dispatch] = useReducer(reducer , initialData);
    const value = {state , dispatch}
    changeCssVaribals(value.state.theme);
    
    localStorage.setItem(KEY_THEME, value.state.theme);
    

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useForm = ()=> {
    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new  Error('useForm needs to be used inside the ThemeProvider')
    }
    return context;
}