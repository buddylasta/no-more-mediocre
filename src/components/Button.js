import { Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <Link to={props.url}>
            <button onClick={props.func} className="bg-[#bd8b46] text-white font-semibold py-2 px-6 rounded-full md:ml-8 hover:bg-[#c68371]
            duration-500">
                {props.children}
            </button>
        </Link>
    );
};

export default Button