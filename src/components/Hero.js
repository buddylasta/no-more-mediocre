import Button from './Button'

export const Hero = () => {
    return (
        <div id="home" className="grid grid-cols-1 items-center place-items-center relative inset-x-0 bottom mt-20 text-white">
            <h1 className="md:text-6xl sm:text-4xl text-3xl">Growth Through Adversity</h1>
            <h3 className="md:text-2xl sm:text-xl text-md py-4">Get comfortable being uncomfortable</h3>
            <Button url={"/workouts"}>Start Here</Button>
        </div>
    );
};