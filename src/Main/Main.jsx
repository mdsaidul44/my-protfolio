/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default Main;