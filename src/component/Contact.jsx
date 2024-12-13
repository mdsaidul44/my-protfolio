/* eslint-disable no-unused-vars */
import React from 'react';
import { CgMailOpen } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";





const Contact = () => {
    return (
        <div id='contact' className='border-2 mt-20'>
            <h1 className='text-center font-bold text-cyan-500 text-3xl mt-10'>Contact</h1>
            <div className='lg:flex lg:mx-32 p-4 my-10'>
                <div className='font-semibold mt-14'>
                    <h1 className=' lg:text-5xl text-3xl font-bold mb-6 '>Contact With Me</h1>
                    <p>I am a front-end web developer. You can contact me for hiring and other inquiries. My contact information is provided below.</p>
                    <h1 className='flex mt-8 pb-2'><CgMailOpen className='mt-1 mr-2' />mdsaidulislam6644@gmail.com</h1>
                    <h1 className='flex py-2'><BsWhatsapp className='mt-1 text-green-600 mr-2' />+8801309756644</h1>
                    <h1 className='flex'><MdLocationOn className='mt-1 mr-2' />Chattogram,Bangladesh</h1>
                    <div className='flex gap-4 text-3xl mt-6'>
                        <a href='https://github.com/mdsaidul44' target='_blank'><FaGithub className=''></FaGithub></a>
                        <a href='https://www.linkedin.com/in/md-saidul/' target='_blank'><FaLinkedin className='text-blue-600'></FaLinkedin></a>
                        <a href='https://www.facebook.com/' target='_blank'>< FaFacebook className='text-sky-600'></ FaFacebook></a>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <div className="  min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="  bg-base-200 rounded-xl w-full max-w-sm shrink-0 shadow-2xl">
                                <form className="card-body">
                                <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" className="input input-bordered" required />
                                    </div> 
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Message</span>
                                        </div>
                                        <textarea className="textarea textarea-bordered h-24" placeholder="Enter Your Message"></textarea>
                                    </label>
                                    <div className="form-control mt-6">
                                        <button className="btn ">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;