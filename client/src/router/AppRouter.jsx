import React from "react";
import { Landing, VehicleDetails } from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}> </Route>
                <Route path="/vehicle/:vehicleType/:id" element={<VehicleDetails/>}></Route>
            </Routes>
        </Router>
    );
}


export default AppRouter;