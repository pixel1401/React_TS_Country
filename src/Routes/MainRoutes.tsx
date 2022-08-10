import React from "react"
import { useRoutes } from "react-router-dom"
import {Countries}  from "../pages/Countries"
import { CountryPage } from "../pages/CountryPage"



const MainRoutes = ()=> {
    // return <>
    //     <Route>
    //         <Route path={'/'} component={Countries}/>
    //         <Route path={'/country/:name'} component={CountryPage}/>
    //         <Route path={'/code/:code'} component={CountryPage}/>
    //     </Route>
    // </>

    return useRoutes([
        {path: '/', element : <Countries/>},
        {path : '/country/:name' , element: <CountryPage/>},
        {path: 'code/:code' , element: <CountryPage/>}
    ])
}


export default MainRoutes;