import Button from './Button'

export const Hero = () => {
    return (
        <div id="home" className="mt-20 text-white">
            <h1 className="flex flex-row items-center justify-center md:text-6xl sm:text-4xl text-2xl">Growth Through Adversity</h1>
            <h3 className="flex flex-row items-center justify-center md:text-xl sm:text-lg text-md py-4">Get comfortable being uncomfortable</h3>
            <div className="flex flex-row justify-center py-4">
                <Button url={"/workouts"}>Start Here</Button>
            </div>
        </div>
    );
};