import Button from './Button'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Nav = () => {
    const links = [
        { name: 'Home', path: '/' },
        { name: 'Workouts', path: '/workouts' },
        { name: 'Skills', path: '/skills' },
        { name: 'Challenges', path: '/challenges' },

    ];
    const [open, setOpen] = useState(false);

    return (
        <nav className="shadow-md w-full sticky top-0 left-0">
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
            <div className="cursor-pointer flex items-center">
                <img src="./2.png" alt="no more mediocre logo" className="max-w-full h-auto cursor-pointer" />
            </div>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
            <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center text-white md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0
            w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-21 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0'} `}>
                {
                    links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 z-30">
                            <Link to={link.path} className="text-white hover:text-gray-400 duration-500">{link.name}</Link>
                        </li>
                    ))
                }
                <Button url={'/workouts'}>
                    Subscribe
                </Button>
            </ul>
            </div>
        </nav>
    );
};