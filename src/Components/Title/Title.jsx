import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div>
            <h1 className='mt-10 text-center text-3xl font-bold'>{title}</h1>
            <p className='md:px-40 lg:px-60 px-5 my-3 text-center'>{subtitle}</p>
        </div>
    );
};

export default Title;