import { useEffect, useState } from "react";
import base from '../base';

export const SkillCards = () => {
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
        // replace a tag with Link
        <div className="grid grid-cols-3 grid-rows-2 gap-4 justify-center mt-5">
            {skills.map((skill) => (
                <div key={skill.id.toString()} className="block max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer">
                    <div key={skill.id.toString()} className="p-8">
                        <div key={skill.id.toString()} className="uppercase tracking-wide text-sm text-[#bd8b46] font-semibold">{skill.fields.skills}</div>
                        <a href="/home" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{skill.fields.hooks}</a>
                        <p className="mt-2 text-slate-500">{skill.fields.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};