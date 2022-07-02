import React, {useCallback, useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Navbar from '../components/NavBar';
import Header from '../components/Header'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import ListMatches from '../components/ListMatches';



const Home = () => {
    const {user, LogOut} = useAuth();

    return (
        <>
            <Navbar/>
            <div className='bg-slate-900 h-screen flex flex-col content-center over'>
                <Header/>
                <span className='mt-16 mb-10 text-white font-thin text-lg'>Watch some highlights</span>
                <p align='center' className=''>
                    <iframe width="600" height="315" src="https://www.youtube.com/embed/5DkfWwnAmJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
                <Cards/>
                <Footer/>
            </div>

           
        </>
    );
}

export default Home;
