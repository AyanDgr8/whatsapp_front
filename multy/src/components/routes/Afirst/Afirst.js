// src/components/routes/Afirst/Afirst.js

import React from "react";
import "./Afirst.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Sign/Login/Login";
import Logout from "../Sign/Logout/Logout";
import Register from "../Sign/Register/Register";
import Home from "../Home/Home";

const Afirst = () => {
    return (
        <Routes>
            
            {/* Register a new user */}
            <Route path="/register" element={<Register />} />

            {/* Login route */}
            <Route path="/login" element={<Login />} />

            {/* sLogout route */}
            <Route path="/logout" element={<Logout />} />

            {/* Logout route */}
            <Route path="/home" element={<Home />} />

        </Routes>
    );
};

export default Afirst;
