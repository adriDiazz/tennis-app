import React, {useState, useEffect, useContext, useCallback}from 'react';  
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../firebase';
import {useNavigate} from 'react-router-dom'
import AuthContext from '../context/authContext';

const useAuth = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    

    const signIn = useCallback((email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    },[])

    const logIn = useCallback((email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    },[])

    const LogOut = useCallback(() => {
        return signOut(auth)
    },[])

    const signInGoogle = useCallback(() => {
        const googleAuthProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleAuthProvider)
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
        

    }, [])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
        }, []);


        return{
            isAuthenticated,
            setIsAuthenticated,
            user,
            signIn,
            logIn,
            LogOut,
            signInGoogle
        }
    }


export default useAuth;
