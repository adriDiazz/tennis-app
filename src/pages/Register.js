import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import background from '../assets/backgroundTennis.jpg';
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

                        <input 
                        type='password' 
                        placeholder='Confirm password' 
                        onChange={handlePassChange}
                        />
                        <button type='submit'>Register</button>
                        <span>Have an account? <NavLink to='/login'>Login</NavLink></span>
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
        }
    }


`
export default Register;
