import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICountryItem } from '../../types/ICountryItem'
import type { RootState } from '../store'


const FAVORITE_ARR = 'favorite-arr-local';
const FAVORITE_COUNT = 'favorite-count-local';


// Define a type for the slice state
interface FavoriteState {
    favoriteArr: ICountryItem[]
    count : number
}

// Define the initial state using that type
const initialState: FavoriteState = {
    favoriteArr : JSON.parse(localStorage.getItem(FAVORITE_ARR) ?? '[]'),
    count: JSON.parse(localStorage.getItem(FAVORITE_COUNT) ?? '0'),
}


const saveLocal = (state: FavoriteState) : void => {
    localStorage.setItem(FAVORITE_ARR, JSON.stringify(state.favoriteArr))
    localStorage.setItem(FAVORITE_COUNT, JSON.stringify(state.count))
}


export const FavoriteSlice = createSlice({
    name: 'favorite',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFavorite: (state , action : PayloadAction<ICountryItem>) => {
            state.favoriteArr.push(action.payload);
            state.count = state.favoriteArr.length;
            saveLocal(state);

        },
        removeFavorite: (state, action: PayloadAction<ICountryItem>) => {
            state.favoriteArr = state.favoriteArr.filter(f => f.name !== action.payload.name);
            state.count = state.favoriteArr.length;
            saveLocal(state);
        },        
    }
})

export const { addFavorite, removeFavorite  } = FavoriteSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.favorite.favoriteArr

export default FavoriteSlice.reducer