import React, { useState } from 'react';
import logo from '../../assets/main-logo.svg'
import { useTheme } from '../../Provider/ThemeContext';

const Login = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const {isDarkMode,setDarkMode}=useTheme();

    const toggleSignUp = () => {
        setShowSignUp(!showSignUp);
    };

    return (
        <div className=''>
            <div className='py-32 '>
                <div className='flex justify-between items-center mx-56 gap-5'>
                    <div>
                        <img src={logo} alt="" className='w-96' />
                        <h1 className='text-3xl font-semibol mt-5 '>BBanter helps you connect and share with the people in your life.</h1>
                    </div>
                    {showSignUp ? (
                        <div className={isDarkMode ? 'bg-custom p-6 rounded-md shadow-lg border border-[#151515]' : 'bg-white p-6 rounded-md shadow-lg border border-[#f1f1f1]'}>
                            <form action="" className='space-y-4'>
                                <input type="name" name="" id="" className={isDarkMode ? 'block w-96 p-3 border border-[#151515] focus:outline-none bg-custom rounded-md' : 'block w-96 p-3 border rounded-md focus:outline-[#2D9596]'} placeholder='Name' />
                                <input type="email" name="" id="" className={isDarkMode ? 'block w-96 p-3 border border-[#151515] focus:outline-none bg-custom rounded-md' : 'block w-96 p-3 border rounded-md focus:outline-[#2D9596]'} placeholder='Email Address or phone number' />
                                <input type="password" name="" id="" className={isDarkMode ? 'block w-96 p-3 border border-[#151515] focus:outline-none bg-custom rounded-md' : 'block w-96 p-3 border rounded-md focus:outline-[#2D9596]'} placeholder='Password' />
                                <button type="submit" className='block w-96 p-3 text-white font-bold primary-bg rounded-md' >Sign Up</button>
                            </form>
                            <p className='text-center pt-5 text-green-600'>Forgot Password?</p>
                            <hr className={isDarkMode ? 'my-5 border-[#151515]' : 'my-5'} />
                            <div className='flex justify-center '>
                                <button className='bg-green-500 w-60 text-lg font-bold text-white py-3 rounded-md' onClick={toggleSignUp}>Already have an account?</button>
                            </div>
                        </div>
                    ) : (
                        <div className={isDarkMode ? 'bg-custom p-6 rounded-md shadow-lg border border-[#151515]' : 'bg-white p-6 rounded-md shadow-lg border border-[#f1f1f1]'}>
                            <form action="" className='space-y-4'>
                                <input type="email" name="" id="" className={isDarkMode ? 'block w-96 p-3 border border-[#151515] focus:outline-none bg-custom rounded-md' : 'block w-96 p-3 border rounded-md focus:outline-[#2D9596]'} placeholder='Email Address or phone number' />
                                <input type="password" name="" id="" className={isDarkMode ? 'block w-96 p-3 border border-[#151515] focus:outline-none bg-custom rounded-md' : 'block w-96 p-3 border rounded-md focus:outline-[#2D9596]'} placeholder='Password' />
                                <button type="submit" className='block w-96 p-3 text-white font-bold primary-bg rounded-md' >Sign In</button>
                            </form>
                            <p className='text-center pt-5 text-green-600'>Forgot Password?</p>
                            <hr className={isDarkMode ? 'my-5 border-[#151515]' : 'my-5'} />
                            <div className='flex justify-center '>
                                <button className='bg-green-500 w-56 text-lg font-bold text-white py-3 rounded-md' onClick={toggleSignUp}>Create new account</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
