import { useEffect, useState } from "react";
import { Card } from "../components/Card"
import { supabase } from "../client";

export const Skills = () => {
    const [fetchError, setFetchError] = useState(null)
    const [skills, setSkills] = useState(null);

    useEffect(() => {
        fetchSkills()
    }, [])

    const fetchSkills = async () => {
        const { data, error } = await supabase
            .from('skills')
            .select()

            if (error) {
                setFetchError('Could not fetch skills')
                setSkills(null)
                console.log(error)
            }
            if (data) {
                setSkills(data)
                setFetchError(null)
                console.log(data)
            }
    }

    return (
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 justify-items-center mt-10 py-7 max-w-[1240px] mx-auto text-center transform transition duration-500">
            {fetchError && (<p>{fetchError}</p>)}
            {skills && (
                skills.map((skill) => (
                <Card 
                    key={skill.id}
                    name={skill.skills}
                    hook={skill.hooks}
                    description={skill.description}
                    embedId={skill.embedIds}
                />
            )))}
        </div>
    )
}