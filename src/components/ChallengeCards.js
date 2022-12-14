import { useEffect, useState } from "react";
import base from '../base';

export const ChallengeCards = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(() => {
        base("challenges")
            .select({view: "Grid view",})
            .eachPage((records, fetchNextPage) => {
                setChallenges(records);
                fetchNextPage();
            });
    });

    return (
        // replace a tag with Link
        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-center mt-5">
            {challenges.map((challenge) => (
                <div key={challenge.id.toString()} className="block max-w-sm bg-slate-100 rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer">
                    <div key={challenge.id.toString()} className="p-8">
                        <div className="uppercase tracking-wide text-sm text-[#bd8b46] font-semibold">{challenge.fields.challenges}</div>
                        <a href="/home" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{challenge.fields.hooks}</a>
                        <p className="mt-2 text-slate-500">{challenge.fields.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};