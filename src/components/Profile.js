import React from "react";
import profile from '../assets/profile.jpeg'
import useAuth from "../hooks/useAuth";

const Profile = ({currentUser}) => {
    const {LogOut} = useAuth()
    return (
        <div className="flex content-center justify-center gap-5">
            <p className='text-white'>{currentUser.email}</p>
            <img src={profile} className='rounded-3xl h-10 w-10'/>
            <button onClick={LogOut}>LogOut</button>
        </div>
    )
}

export default Profile;