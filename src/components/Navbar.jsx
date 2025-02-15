import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div></div>
            <div className='space-x-5'>
              <Link to='/'>Home</Link>
              <Link to='/career'>Career</Link>
              <Link to='/about'>About</Link>
            </div>
            <div>
               <div className='flex gap-2 items-center'>
                <div>
                <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? <button onClick={logOut} className='btn btn-neutral rounded-sm'> Log Out</button> : <Link to='/auth/login' className='btn btn-neutral rounded-sm'>Login</Link>
                }
                
               </div>
            </div>
        </div>
    );
};

export default Navbar;