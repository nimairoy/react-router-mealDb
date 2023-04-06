import React from 'react';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            this is home
            <Outlet />
        </div>
    );
};

export default Home;