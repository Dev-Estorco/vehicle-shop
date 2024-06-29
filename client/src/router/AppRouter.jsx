import React from "react";
import MainOutlet from "../pages/MainOutLet";
import { Landing, Home , VehicleDetailsPage} from "../pages";
import { createBrowserRouter } from "react-router-dom";


const Routes = [
    {
        path: "/",
        element: <MainOutlet/>,
        children: [
            {
                path: "/homepage",
                element: <Home/>
            },

            {
                path: "/landing",
                element: <Landing/>
            },

            {
                path: "/vehicle",
                element: <Landing/>
            },

            {
                path: "/vehicle-details",
                element: <VehicleDetailsPage/>
            },


        ]
    }
]



const AppRouter = createBrowserRouter(Routes);

export default AppRouter;