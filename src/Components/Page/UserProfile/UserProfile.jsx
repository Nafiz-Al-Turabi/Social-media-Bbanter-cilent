import React, { useState, useEffect } from 'react';
import { FaSquarePlus } from "react-icons/fa6";
import cover from '../../../assets/cover2.jpg'
import { FaPen } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useTheme } from '../../../Provider/ThemeContext';


const UserProfile = () => {
    const [backgroundColor, setBackgroundColor] = useState('#292929');
    const {isDarkMode, setDarkMode}= useTheme();

    useEffect(() => {
        const image = new Image();
        image.src = cover;
        image.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = image.width;
            canvas.height = image.height;
            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0);
            const data = context.getImageData(0, 0, canvas.width, canvas.height).data;

            let r = 0;
            let g = 0;
            let b = 0;
            let count = 0;

            for (let i = 0; i < data.length; i += 4) {
                r += data[i];
                g += data[i + 1];
                b += data[i + 2];
                count++;
            }

            r = Math.floor(r / count);
            g = Math.floor(g / count);
            b = Math.floor(b / count);

            setBackgroundColor(`rgb(${r}, ${g}, ${b})`);
        };
    }, []);

    return (
        <div>
            <div className={isDarkMode ? 'bg-gradient-to-b from-transparent to-slate-800' : 'bg-gradient-to-b from-transparent to-gray-200'} style={{ backgroundColor }}>
                <div className='max-w-6xl mx-auto pb-32 relative'>
                    <div className=''>
                        <img src={cover} alt=""
                            className='w-full h-full object-cover rounded-b-xl'
                            style={{ aspectRatio: '25/9' }}
                        />
                    </div>
                    <div className='absolute -bottom-0 left-0 md:left-10 w-full'>
                        <div className='flex items-center gap-6'>
                            <img src={cover} alt="" className='w-40 h-40 object-cover rounded-full border-4 border-white/50' />
                            <div>
                                <h1 className='text-3xl  font-bold'>Nafiz Al Turabi</h1>
                                <p className='font-bold'>145 Friends</p>
                                <div className='grid grid-cols-10 -gap-5'>
                                    <img src="/img.jpg" alt="image" className='w-8 h-8 border rounded-full' />
                                    <img src="/img.jpg" alt="image" className='w-8 h-8 border rounded-full' />
                                    <img src="/img.jpg" alt="image" className='w-8 h-8 border rounded-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto mt-5 md:mt-10'>
                    <div className='flex justify-between mx-4'>
                        <button className='text-white bg-gray-500 w-16 h-10 rounded-md flex justify-center items-center'><IoIosArrowDown /></button>
                        <div className='flex gap-2 mb-5'>
                            <button className='text-white font-semibold primary-bg px-3 py-2 flex items-center gap-5 rounded-md'>Add Story <FaSquarePlus /></button>
                            <button className='text-white font-semibold secondary-bg px-3 py-2 flex items-center gap-5 rounded-md'>Edit Profile <FaPen /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
