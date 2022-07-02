import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'


const Header = () => {
    return (
        <>
            <div className='bg-slate-900 relative'>
                <p className="font-bold text-6xl p-10 text-white">Get your favourite <span className='text-green-600'>tennis</span> player news</p>
                <p className="font-thin text-xl p-10 text-white">See matches, news, results all in one place </p>
                <div className='flex gap-4 justify-center'>
                    <button className='text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'><NavLink to="/login">Get Started</NavLink></button>
                    <button className='text-white bg-transparent hover:bg-slate-700 border border-x-gray-50  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'><NavLink to="/news">See some news</NavLink></button>
                </div>
            
            </div>
        </>
    );
}


export default Header;
