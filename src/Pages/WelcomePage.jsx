import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function WelcomePage() {

    const navigate = useNavigate();
    const {state} = useLocation();
    const usersList = state

    const btnRegister = () =>{
            navigate('Register',)
        }

    const btnLogin = () =>{
        navigate('Login')
    }


  return (
    <div className="welcome_page"> 
        <h1 >Loview</h1>
        <img  src="/public/Pictures/video_movie_player_clip-09-512.webp" alt="" style={{width: 250}}/><br />
        <button onClick={btnLogin}>Login</button><br />
        <button onClick={btnRegister}>Register</button>


    </div>
  )
}
