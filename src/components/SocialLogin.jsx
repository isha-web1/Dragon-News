import React from 'react';
import { FaGithub, FaGoogle } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div>
            <h1>this is social login</h1>
            <div className='font-semibold mb-3 *:w-full space-y-2 rounded-sm'>
                <button className='btn btn-primary'> <FaGoogle></FaGoogle> Login with Google</button>
                <button className='btn btn-secondary'> <FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;