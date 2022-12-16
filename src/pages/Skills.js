import { useEffect, useState } from "react";
import base from "../base";
import { Card } from "../components/Card"


export const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        base("skills")
            .select({view: "Grid view",})
            .eachPage((records, fetchNextPage) => {
                setSkills(records);
                fetchNextPage();
            });
    });


    return (
        <div className="grid md:grid-cols-3 md:grid-rows-2 gap-8 justify-items-center mt-10 py-7 max-w-[1240px] mx-auto text-center">
            {skills.map((skill) => (
                <Card 
                    key={skill.id.toString()} 
                    name={skill.fields.skills}
                    hook={skill.fields.hooks}
                    description={skill.fields.description}
                />
            ))}
        </div>
    )
}