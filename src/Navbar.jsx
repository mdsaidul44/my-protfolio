// eslint-disable-next-line no-unused-vars
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>About</a></li>
                            <li><a>Skill</a></li>
                            <li><a>Projects</a></li>
                            <li><a>Education</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold text-cyan-700">Md Saidul</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold px-1">
                        <li><a>About</a></li>
                        <li><a>Skill</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Education</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='w-11 h-11 rounded-full' src="https://i.ibb.co.com/vPVGCWh/Whats-App-Image-2023-11-14-at-22-34-39-b0098a45.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;