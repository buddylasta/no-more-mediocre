import { useEffect, useState } from "react";
import { Card } from "../components/Card"
import { supabase } from "../client";


export const Challenges = () => {
    const [fetchError, setFetchError] = useState(null)
    const [challenges, setChallenges] = useState(null);

    useEffect(() => {
        fetchSkills()
    }, [])

    const fetchSkills = async () => {
        const { data, error } = await supabase
            .from('challenges')
            .select()

            if (error) {
                setFetchError('Could not fetch skills')
                setChallenges(null)
                console.log(error)
            }
            if (data) {
                setChallenges(data)
                setFetchError(null)
                console.log(data)
            }
    }


    return (
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 justify-items-center mt-10 py-7 max-w-[1240px] mx-auto text-center transform transition duration-500">
            {fetchError && (<p>{fetchError}</p>)}
            {challenges && (
                challenges.map((challenge) => (
                <Card 
                    key={challenge.id} 
                    name={challenge.challenges}
                    hook={challenge.hooks}
                    description={challenge.description}
                    embedId={challenge.embedIds}
                />
            )))}
        </div>
    )
}