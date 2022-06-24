import React from 'react';
import useAuth from '../hooks/useAuth';
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/NavBar';
import Header from '../components/Header'


const Home = () => {
    const {user, LogOut} = useAuth();
    const history = useNavigate()

    const handleClick = () => {
        LogOut()
            .then( res => {
                history('/login')
            })
    }
    //<button onClick={handleClick}>LogOut</button>
    return (
        <>
            <Navbar/>
            <div className='bg-slate-900 h-screen flex flex-col content-center'>
                <Header/>
                <span className='mt-16 mb-10 text-white font-thin text-lg'>Watch some highlights</span>
                <p align='center' className=''>
                    <iframe width="600" height="315" src="https://www.youtube.com/embed/5DkfWwnAmJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
            </div>
        </>
    );
}

export default Home;
