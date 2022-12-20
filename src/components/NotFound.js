export const NotFound = () => {
    return (
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white capitalize'>
            <h1 className="md:text-4xl sm:text-3xl text-2xl">Looks like you're lost!</h1>
            <p className="md:text-2xl sm:text-2xl text-xl pt-8">Don't worry, workouts are <a className="underline decoration-[#00df9a]" href='/workouts'>over here</a></p>
        </div>
    )
};