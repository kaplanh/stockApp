import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Private = () => {
    const currentUser = true;
    return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default Private;
