import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>GROWING THROUGH ADVERSITY</p>
                <h1 className='md:text-6xl sm:text-5xl text-3xl font-bold md:py-3'>Grow with effort.</h1>
                <div className="flex justify-center items-center">
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, efficient workouts for everyone</p>
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600'>Workout, learn new skills, and challenge yourself to push past your limits.</p>
                <Link to={'/workouts'}>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get To Work</button>
                </Link>
            </div>
        </div>
    );
};