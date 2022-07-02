import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import background from '../assets/backgroundTennis.jpg';
import {NavLink, useNavigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google from '../assets/google.png'

const Login = () => {
    const {user,logIn,signInGoogle} = useAuth();
    const navigate = useNavigate()

    const [value, setValue] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        logIn(value.email, value.password)
            .then(res => {
                navigate('/')
            }).catch(error => {
                toast(error.message)
            }) 
    }

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    }, [user,navigate]);

    return (
        <>
            <div className='flex items-center justify-center h-screen bg-slate-900'>
                <div className="p-4 bg-slate-800 rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 w-1/4">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <h5 className="text-xl font-medium text-white ">Log in to our platform</h5>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 " placeholder="name@email.com" onChange={(e) => setValue({...value, email: e.target.value})}/>
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your password</label>
                            <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"  onChange={(e) => setValue({...value, password: e.target.value})}/>
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required=""/>
                                </div>
                                <label for="remember" className="ml-2 text-sm font-medium text-white dark:text-gray-300">Remember me</label>
                            </div>
                            <NavLink to='/register' className="ml-auto text-sm text-green-500 hover:underline "> Lost Password?</NavLink>
                        </div>
                        <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <NavLink to='/register' className="text-green-500 hover:underline ">Create account</NavLink>
                        </div>
                        <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={signInGoogle}>
                        <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" ><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}


export default Login;
