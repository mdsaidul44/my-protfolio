// eslint-disable-next-line no-unused-vars
import React from 'react';

const Name = () => {
    return (
        <div className='lg:flex lg:p-14 mt-10'>
            <div className='lg:w-1/2 p-4 my-10 space-y-3'>
                <h1 className='text-5xl font-bold text-cyan-500'>Hi, I&lsquo;m </h1>
                <h1 className='text-3xl font-bold'>MD SAIDUL ISLAM</h1>
                <p>I love building responsive, user-friendly websites and web applications. With a strong foundation in HTML, CSS, JavaScript, and React, I&lsquo;m dedicated to creating efficient, scalable solutions. Let&lsquo;s work together to turn your ideas into reality.</p>
                <button className='btn rounded-2xl font-bold bg-cyan-300'>Contact Me</button>
            </div>
            <div className='lg:ml-64 '>
                <img className='lg:h-96' src="https://i.ibb.co.com/TkMqQ6b/1000118254-removebg-preview-1-1.png" alt="" />
            </div>
        </div>
    );
};

export default Name;