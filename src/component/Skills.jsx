/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import MySkills from './MySkills';

const Skills = () => {
    const [skills, setSkills] =useState([])
    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data)); 
    }, []);
    // console.log(skills)
    return (
        <div className='py-10'>
            <h1 className='text-3xl text-sky-600 font-bold text-center p-10'>Skills/</h1>
            <div className='grid lg:grid-cols-3 grid-cols-1 p-3 lg:px-64 gap-4'>
                {
                    skills.map(skill=><MySkills skill={skill} key={skill.name}></MySkills>)
                }
            </div>
        </div>
    );
};

export default Skills;