import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MyLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MyLayout;