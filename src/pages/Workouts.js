import { useEffect, useState } from 'react';
import YoutubeEmbed from '../components/Youtube';
import { supabase } from '../client';

export const Workouts = () => {
    const [fetchError, setFetchError] = useState(null)
    const [embedIds, setEmbedIds] = useState(null);
    const [embedId, setEmbedId] = useState('')

    useEffect(() => {
        fetchLinks()
    }, [])

    const fetchLinks = async () => {
        const { data, error } = await supabase
            .from('workouts')
            .select('embedIds')

            if (error) {
                setFetchError('Could not fetch links')
                setEmbedIds(null)
            }
            if (data) {
                setEmbedIds(data)
                setFetchError(null)
                console.log(data)
            }
    }

    const workout = embedId ? <YoutubeEmbed id={embedId} /> : null

    // Get random embedId
    const getUrl = () => {
        {
            let numberOfWorkouts = embedIds.length
            let index = Math.floor(Math.random() * numberOfWorkouts)
            setEmbedId(embedIds[index].embedIds)
        };
    };

    return (
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white pt-10'>
            <p className="py-3 md:text-3xl sm:text-2xl font-extrabold capitalize">Don't think, just do!</p>
            {fetchError && (<p>{fetchError}</p>)}
            {workout}
            <button
                className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black
                    hover:bg-[#00df98d1] duration-500"
                onClick={getUrl}
            >
                Generate Workout
            </button>
        </div>
    )    
}