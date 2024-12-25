import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className='space-y-3'>
                <h1 className='text-[8rem] text-center'>404</h1>
                <h1 className='text-2xl text-center'>Oops! Page Not Found</h1>
                <p  className='text-sm text-gray-500 font-semibold text-center'>The page you’re looking for doesn’t exist or may have been moved.</p>
                <Link to="/">
                <div className='flex my-3 justify-center'>
                <button className='btn text-white bg-green-500'>Go Back Home</button>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default Error;