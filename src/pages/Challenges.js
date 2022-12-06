export const Challenges = () => {
    const challenges = [
        {
            name: "",
            description: ""
        },
        {
            name: "",
            description: ""
        },
        {
            name: "",
            description: ""
        },
        {
            name: "",
            description: ""
        },
    ]
    return (
        <div className="grid grid-cols-1 grid-rows-10 gap-4">
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="p-8">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Treadmill Marathon</div>
                <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Challenge your legs and your mind</a>
                <p class="mt-2 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tellus sem, rhoncus sed viverra vitae, feugiat a sem. Vestibulum purus nisl, convallis et diam sit amet, accumsan vehicula. </p>
                </div>
            </div>
            </div>
        </div>
    )
}