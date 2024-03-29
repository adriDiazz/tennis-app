import React from 'react';
import { NavLink, useNavigate} from 'react-router-dom';
import logo from '../assets/mens_tennis.png'
import useAuth from '../hooks/useAuth';
import ListMatches from './ListMatches';
import Profile from './Profile';


const Navbar = () => {
    const navigate = useNavigate()
    const {user} = useAuth()
    const handleClick = () => {
        navigate('/login')
    }
    return (
        <nav className="bg-slate-700     ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <NavLink to="/" className="flex items-center">
                    <img src={logo} className="mr-3 h-6 sm:h-9" alt="" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">TennisZone</span>
                </NavLink>
                <div className="flex md:order-2 p-2">

                {
                    user ? <Profile currentUser={user}/>
                        : <button type="button" className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 " 
                        onClick={handleClick}>
                        Login
                    </button>
                }

                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <NavLink to='/' className='block py-2 pr-4 pl-3 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 '>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/rankingAtp' className='block py-2 pr-4 pl-3 text-white bg-green-500 rounded md:bg-transparent md:text-gray-300 md:p-0 '>ATP</NavLink>
                    </li>
                    <li>
                        <NavLink to='/rankingWta' className='block py-2 pr-4 pl-3 text-white bg-green-500 rounded md:bg-transparent md:text-gray-300 md:p-0 '>WTA</NavLink>
                    </li>
                    <li>
                        <NavLink to='/news' className='block py-2 pr-4 pl-3 text-white bg-green-500 rounded md:bg-transparent md:text-gray-300 md:p-0 '>NEWS</NavLink>
                    </li>
                    </ul>
                </div>
            </div>

            <ListMatches/>
        </nav>
    );
}

export default Navbar;
