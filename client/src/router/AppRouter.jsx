import React from "react";
import { Landing } from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}>
                </Route>
            </Routes>
        </Router>
    );
}


export default AppRouter;