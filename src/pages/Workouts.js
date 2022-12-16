import { useEffect, useState } from 'react';
import YoutubeEmbed from '../components/Youtube';
import base from '../base';

export const Workouts = () => {
    const [url, setUrl] = useState('')
    const [data, setData] = useState([]);

    useEffect(() => {
        base('workouts').select({
            view: "Grid view",
            fields: ["fldiarkodC4GhkW33"],
        }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                let link = record.get('link')
                setData(data => [...data, link])
            });
    
            fetchNextPage();
    
        }, function done(err) {
            if (err) { console.error(err); return; }
        });
    }, []);

    const workout = url ? <YoutubeEmbed url={url} /> : null

    // Get random embedId
    const getWorkoutUrl = () => {
        {
            let numberOfWorkouts = data.length
            let index = Math.floor(Math.random() * numberOfWorkouts)
            setUrl(data[index])
        };
    };

    return (
        <div className='grid justify-items-center text-white'>
            <p className="text-2xl">No better opportunity to improve than the present!</p>
            {workout}
            <button
                className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black
                    hover:bg-[#00df98d1] duration-500"
                onClick={getWorkoutUrl}
            >
                Generate Workout
            </button>
        </div>
    )    
}