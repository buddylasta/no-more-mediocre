export const Cards = () => {
    const skills = [
        {
            id: 1,
            name: "Planche Push-ups",
            description: "Look Ma! No hands. Do push-ups with your legs in the air",
            url: ""
        },
        {
            id: 2,
            name: "Nordic Curls",
            description: "No pain, no gain! Lower and elevate your body with your hamstrings",
            url: ""
        },
        {
            id: 3,
            name: "Lorem Ipsum",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            url: ""
        },
        {
            id: 4,
            name: "Lorem Ipsum",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            url: ""
        },
        {
            id: 5,
            name: "Lorem Ipsum",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            url: ""
        },
        {
            id: 6,
            name: "Lorem Ipsum",
            description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
            url: ""
        },
    ]
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-7 justify-center mt-5">
            {
                skills.map((skill) => (
                    <a keys={skill.id.toString()} href={skill.url} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="flex flex-col items-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{skill.name}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{skill.description}</p>
                    </a> 
                ))
            }
        </div>
    )
};