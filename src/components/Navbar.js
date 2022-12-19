import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../assets/logo.png'

export const Navbar = () => {
    const [ nav, setNav ] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Workouts', path: '/workouts' },
        { name: 'Skills', path: '/skills' },
        { name: 'Challenges', path: '/challenges' },

    ];

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <img className='object-contain h-30 w-60 pt-9' src={Logo} alt="Logo" />
            <ul className='hidden md:flex'>
                {
                    links.map((link) => (
                        <li key={link.name} className='p-4 hover:bg-[#00df98d1] duration-500'>
                            <Link to={link.path} className='text-white'>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>

            {/* set icon or menu-outline or close depending on state of nav */}
            {/* hide men-outline icon if size is greater than 768px/md*/}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <ion-icon name="close"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}
            </div>

            {/* mobile menu  */}
            <div className={nav ? 'fixed left-0 top-0 md:w-[35%] w-[60%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500 z-10' : 
                'fixed left-[-100%] z-10'}>
            <img className='object-contain h-30 w-60' src={Logo} alt="Logo" />
                <ul className='uppercase p-4'>
                    {
                        links.map((link) => (
                            <li key={link.name} className='p-4 border-b border-gray-600 hover:bg-[#00df98d1] duration-500'>
                                <Link to={link.path} className='text-white'>{link.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};