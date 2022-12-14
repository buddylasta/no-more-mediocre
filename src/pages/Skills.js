import { SkillCards } from "../components/SkillCards"


export const Skills = () => {
    return (
        <div className="grid grid-col justify-center my-3">
            <h2 className="grid grid-col justify-center text-white text-4xl mb-3">Learn Something New</h2>
            <SkillCards />
        </div>
    )
}