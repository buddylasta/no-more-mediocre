import { useState } from 'react';
import { Form } from '../components/Form';
import YoutubeEmbed from '../components/Youtube';

export const Workouts = () => {
    const [id, setId] = useState('')

    const workouts = [
        { id: 'e39eoxw9KkM'},
        { id: 'fAFRjgjsF8Q'},
        { id: 'vD7s0fsjkj4'},
    ];

    const workout = id ? <YoutubeEmbed embedId={id} /> : null

    // Get random embedId
    const getWorkoutId = () => {
        {
            let numberOfWorkouts = workouts.length
            let index = Math.floor(Math.random() * numberOfWorkouts)
            setId(workouts[index].id)
        };
    };

    return (
        <div className='grid col-span-1 justify-items-center text-white'>
            <p className="text-2xl">No better opportunity to improve than the present!</p>
            {workout}
            <button
                className="bg-[#bd8b46] text-white font-semibold py-2 px-6 rounded-full md:ml-8
                    hover:bg-[#c68371] duration-500 my-3"
                onClick={getWorkoutId}
            >
                Generate Workout
            </button>
            <div className='mt-12'>
                <p className='pb-3'>Enter an embedID to add a workout!</p>
            </div>
            <Form />
        </div>
    )    
}