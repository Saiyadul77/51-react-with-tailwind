import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'About us', link: '/about' },
        { id: 3, name: 'Programs', link: '/programs' },
        { id: 4, name: 'Privacy Policy', link: '/privacy' },
        { id: 5, name: 'Terms and Condition', link: '/terms' },
    ]
    return (
        <nav className='bg-indigo-300'>

            <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center absolute md:static bg-indigo-300 w-full duration-500 ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;