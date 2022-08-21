import { configureStore } from "@reduxjs/toolkit";
import { getAllCountry } from "../api/rtkApi";
import FavoriteReducer  from "./reducers/favoriteReducer";
import { setupListeners } from '@reduxjs/toolkit/query'
import { weatherApi } from "../api/weatherApi";
import { countryApi } from "../api/countryApi";


export const store = configureStore({
    reducer : {
        favorite: FavoriteReducer,
        [getAllCountry.reducerPath] : getAllCountry.reducer,
        [weatherApi.reducerPath]: weatherApi.reducer,
        [countryApi.reducerPath]: countryApi.reducer,

    },
    
})


setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch