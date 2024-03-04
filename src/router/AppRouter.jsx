import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/stock" element={<PrivateRouter />}>
                    <Route path="" element={<Dashboard />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRouter;
