import React from 'react';
import { NavLink } from 'react-router-dom';
import rankingsImg from '../assets/rankings.jpeg'
import rankinfImg from '../assets/reankingF.webp'

const Cards = () => {
    return (
        <div className='flex justify-center content-center gap-8 bg-slate-900 '>
            <NavLink to="/rankingAtp" className="flex flex-col items-center bg-slate-800 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-slate-700 mt-28 h-44">
                <img className="object-cover w-full h-auto rounded-t-lg md:h-40 md:w-48 md:rounded-none md:rounded-l-lg" src={rankingsImg}  alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">ATP Rankings</h5>
                    <p className="mb-3 font-thin text-white dark:text-gray-400">Click here if you want to see last updates on the ATP ranking on real time</p>
                </div>
            </NavLink>
            <NavLink to="/rankingWtp" className="flex flex-row items-center bg-slate-800 rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-slate-700 mb-28 mt-28 h-44">
                <img className="object-cover w-full h-auto rounded-t-lg md:h-40 md:w-48 md:rounded-none md:rounded-l-lg" src={rankinfImg}  alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">WTA Rankings</h5>
                    <p className="mb-3 font-thin text-white dark:text-gray-400">Click here if you want to see last updates on the WTA ranking on real time</p>
                </div>
            </NavLink>
            
        </div>
    );
}

export default Cards;
