import React from 'react';
import Navber from '../Home/Navber/Navber';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
         <div className='container mx-auto'>
         <Navber></Navber>
         <div className='min-h-[calc(100vh-274)'>
        <Outlet></Outlet>
         </div>
         </div>
        </>
    );
};

export default Root;