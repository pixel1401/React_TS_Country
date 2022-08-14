import React from "react"
import { useRoutes } from "react-router-dom"
import {Countries}  from "../pages/Countries"
import { CountryPage } from "../pages/CountryPage"
import FavoritePage from "../pages/Favorite"



const MainRoutes = ()=> {


    return useRoutes([
        {path: '/', element : <Countries/>},
        {path : '/country/:name' , element: <CountryPage />},
        {path: '/code/:code' , element: <CountryPage/>},
        {path: '/favorite/' , element: <FavoritePage/>},
        {path: '*' , element: <Countries/>}
    ])
}


export default MainRoutes;