import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-4'>
            <div>
              <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h1 className='text-gray-500 items-center'>Journalism without fear or favour</h1>
        </div>
    );
};

export default Header;