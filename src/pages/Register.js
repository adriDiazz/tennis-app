import React, {useState, useEffect} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import {NavLink, useNavigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';


const Register = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState({
        email: '',
        password: ''
    });
    const [password, setPassword] = useState('')

    const {user,signIn} = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === value.password) {
            signIn(value.email,value.password)
                .then(res => {
                    navigate('/')
                })
                .catch(error => {
                    toast(error.message)
                })
        }else {
            toast('Password does not match')
        }
    }

    const handlePassChange = (e) => {
        setPassword(e.target.value)
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
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Confirm password</label>
                            <input type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"  onChange={handlePassChange}/>
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
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    );
}


export default Register;
