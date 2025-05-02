import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div> 
            <h2 className='font-semibold text-xl text-accent-content'>Login With</h2>
            <div className='flex flex-col mt-5 gap-2'>
            <button className="btn btn-outline btn-secondary"><FaGoogle size={20} />Login with Google</button>
                <button className='btn btn-outline btn-primary'><FaGithub size={20} />Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;