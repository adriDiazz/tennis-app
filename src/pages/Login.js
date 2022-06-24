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
            <Container >
                <div className='container'>
                <form className='' onSubmit={handleSubmit}>
                        <input 
                        type='text' 
                        placeholder='Email'
                        onChange={(e) => setValue({...value, email: e.target.value})}
                        />
                        
                        <input 
                        type='password' 
                        placeholder='Password' 
                        onChange={(e) => setValue({...value, password: e.target.value})}
                        />
                        <button type='submit'>Login</button>
                        <span>Dont have an account? <NavLink to='/register'>Register</NavLink></span>
                        <button onClick={signInGoogle} className='buttonG'>
                            <img src={google} alt='googleLogo' className='logoG'/>
                            Sign in with Google
                        </button>
                    </form>
                </div>  
            </Container>
            <ToastContainer/>
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: white;
        border-radius: 10px;
        width: 430px;
        height: 450px;
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
            input {
                padding: 1rem;
                width: 300px;
                border-radius: 6px;
                border: 1px solid #ccc;
            }
            button {
                padding: 1rem;
                width: 100px;
                background-color: #368FE2;
                border: none;
                color: white;
                border-radius: 6px;
            }
            span {
                margin-top: 1rem;
            }
            .buttonG{
                display:flex;
                align-items: center;
                gap: 1rem;
                width:200px;
                img {
                    background: #fff; 
                    mix-blend-mode: screen;
                }
            }

        }
    }


`
export default Login;
