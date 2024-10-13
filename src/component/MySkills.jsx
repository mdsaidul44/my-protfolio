/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const MySkills = ({ skill }) => {
    const { image, name, state } = skill
    return (
        <div className=''>
            <div className='lg:w-80 justify-around  py-3 rounded border-2 border-sky-800 hover:cursor-pointer flex'>
                <div>
                    <img className='w-14 h-14' src={image} alt="" />
                </div>
                <div className='text-slate-550 font-bold'>
                    <h1>{name}</h1>
                    <p>{state}</p>
                </div>
            </div>
        </div>
    );
};

export default MySkills;