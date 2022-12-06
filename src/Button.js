
const Button = (props) => {
    return (
        <button onClick={props.func} className="bg-[#bd8b46] text-white font-semibold py-2 px-6 rounded-full md:ml-8 hover:bg-[#c68371]
        duration-500">
            {props.children}
        </button>
    );
};

export default Button