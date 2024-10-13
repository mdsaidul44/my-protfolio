/* eslint-disable no-unused-vars */
import React from 'react';

const Work = () => {
    return (
        <div className='py-14 text-center'>
            <div className="stats stats-vertical text-center  lg:stats-horizontal shadow">
                <div className="stat bg-slate-200"> 
                    <div className="stat-value text-5xl">01Y+</div>
                    <div className="stat-desc text-xl font-semibold">Experience</div>
                </div>

                <div className="stat bg-slate-200"> 
                    <div className="stat-value text-5xl ">13+</div>
                    <div className="stat-desc text-xl font-semibold">Projects</div>
                </div>

                <div className="stat bg-slate-200">
                    <div className="stat-value text-5xl">03+</div>
                    <div className="stat-desc text-xl font-semibold">MERN Projects</div>
                </div>
                <div className="stat bg-slate-200">
                    <div className="stat-value text-5xl">10+d</div>
                    <div className="stat-desc text-xl font-semibold">Tailwind projects</div>
                </div>
            </div>
        </div>
    );
};

export default Work;