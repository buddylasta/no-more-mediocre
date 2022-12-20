export const Card = (props) => {

    return (
        <div className="block md:max-w-md max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer border-2 border-[#00df9a] h-full w-full -z-10 text-center">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#00df9a] font-medium">{props.name}</div>
                <a href={`https://www.youtube-nocookie.com/embed/${props.embedId}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline capitalize" target="_blank" rel="noreferrer">{props.hook}</a>
                <p className="mt-2 text-slate-500">{props.description}</p>
            </div>
        </div>
    )
};