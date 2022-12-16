import { Link } from "react-router-dom";

export const Card = (props) => {

    return (
    // replace a tag with Link
        <div key={props.key} className="block md:max-w-md max-w-sm bg-white rounded-xl shadow-md overflow-hidden transform transition duration-500 hover:scale-105 cursor-pointer border-2 border-[#00df9a] h-full w-full -z-10 text-center">
            <div key={props.key} className="p-8">
                <div className="uppercase tracking-wide text-sm text-[#00df9a] font-medium">{props.name}</div>
                <Link to={"/home"} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{props.hook}</Link>
                <p className="mt-2 text-slate-500">{props.description}</p>
            </div>
        </div>
    )
};