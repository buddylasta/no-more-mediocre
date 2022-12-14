import { ChallengeCards } from "../components/ChallengeCards"

export const Challenges = () => {
    return (
        <div className="grid grid-col justify-center my-3">
            <h2 className="grid grid-col justify-center text-white text-4xl mb-3">Challenge Yourself</h2>
            <ChallengeCards />
        </div>
    )
}