import React from 'react';
import styled from 'styled-components'


const Header = () => {
    return (
        <>
            <div className='bg-slate-900 '>
                <p className="font-bold text-6xl p-10 text-white">Get your favourite <span className='text-green-600'>tennis</span> player news</p>
                <p className="font-thin text-xl p-10 text-white">See matches, news, results all in one place </p>
                <div className='flex gap-4 justify-center'>
                    <button className='text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'>Get Started</button>
                    <button className='text-white bg-transparent hover:bg-slate-400 border border-x-gray-50  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0'>See some news</button>
                </div>
            </div>
        </>
    );
}


export default Header;
