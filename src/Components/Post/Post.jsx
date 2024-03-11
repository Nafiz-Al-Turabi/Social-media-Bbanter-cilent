import React, { useState } from 'react';
import { IoMdPhotos, IoMdCloseCircle } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";


const Post = () => {
    const [isOpen, setOpen] = useState(false);

    const openModal = () => {
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className='border-2 rounded-lg bg-gray-100 shadow-md'>
                <div className='flex items-center bg-white p-2 rounded-t-lg'>
                    <img src="/photo.jpg" alt="photo" className='w-10 h-10 rounded-full border ' />
                    <button onClick={openModal} className='w-full text-gray-600 font-semibold text-left p-3'>Whats on you mind, user name</button>
                </div>
                <hr className='border' />
                <div className='p-2 space-x-3 flex items-center'>
                    <button className='text-3xl primary-text'><IoMdPhotos /></button>
                    <button className='text-3xl primary-text'><IoVideocam /></button>
                </div>
            </div>
            {
                isOpen &&
                (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50'>
                        <div className='relative bg-white  py-2 rounded-lg shadow-lg'>
                            <h1 className='text-center text-gray-500 text-2xl font-bold py-2'>Create post</h1>
                            <hr />
                            <div className='p-4'>
                                <div className='flex items-center space-x-3'>
                                    <img src="/photo.jpg" alt="photo" className='w-8 h-8 rounded-full border ' />
                                    <div className='text-xs text-gray-500'>
                                        <h2>Nafiz Al Turabi</h2>
                                        <p>Dowpdown</p>
                                    </div>
                                </div>
                                <textarea name="" id="" cols="30" rows="6" className='w-full bg-transparent focus:outline-none mt-5 text-xl' placeholder='Whats on your mind...'></textarea>
                                <button className='w-full primary-bg py-2 rounded-md font-bold'>Post</button>
                            </div>
                            <button onClick={closeModal} className='absolute top-5 right-5 text-2xl text-gray-500'><IoMdCloseCircle /></button>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default Post;