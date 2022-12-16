import { useEffect, useState } from "react";
import base from "../base";
import { Card } from "../components/Card"


export const Challenges = () => {
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
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 justify-items-center place-items-center mt-7 py-7 max-w-[1240px] mx-auto transform transition duration-500">
            {challenges.map((challenge) => (
                <Card 
                    key={challenge.id.toString()} 
                    name={challenge.fields.challenges}
                    hook={challenge.fields.hooks}
                    description={challenge.fields.description}
                />
            ))}
        </div>
    )
}