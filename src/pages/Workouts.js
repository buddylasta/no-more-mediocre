import { useEffect, useState } from 'react';
import base from '../base';
import YoutubeEmbed from '../components/Youtube';

export const Workouts = () => {
    const [url, setUrl] = useState('')
    const [data, setData] = useState([]);

    useEffect(() => {
        base('workouts').select({
            // Selecting the first 3 records in Grid view:
            view: "Grid view",
            fields: ["fldiarkodC4GhkW33"],
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            records.forEach(function(record) {
                console.log("forEach loop is running")
                let link = record.get('link')
                setData(data => [...data, link])
            });
    
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
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
            console.log(`this is data while getting workout ${data}`)
            setUrl(data[index])
        };
    };

    return (
        <div className='grid justify-items-center text-white'>
            <p className="text-2xl">No better opportunity to improve than the present!</p>
            {workout}
            <button
                className="bg-[#bd8b46] text-white font-semibold py-2 px-6 rounded-full md:ml-8
                    hover:bg-[#c68371] duration-500 my-3"
                onClick={getWorkoutUrl}
            >
                Generate Workout
            </button>
        </div>
    )    
}