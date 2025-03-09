import React from 'react'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../css/WelcomePage.css";
import { useContext } from "react";
import { DataContext } from "./AppDB";

export default function WelcomePage() {

    const navigate = useNavigate();
    const {state} = useLocation();
    const usersList = state
    console.log(usersList);
    const usersDetails = useContext(DataContext);
    console.log(usersDetails);

    const btnRegister = () =>{
            navigate('Register',)
        }

    const btnLogin = () =>{
        navigate('Login')
    }


  return (
    <div className="welcome-container">
    <div className="welcome-card">
        <h1 className="welcome-title">Loview</h1>
        <img 
            src="/public/Pictures/video_movie_player_clip-09-512.webp" 
            alt="Welcome" 
            className="welcome-img"
        />
    
        <div className="welcome-buttons" style={{fontFamily: "Comic sans MS, sans-serif"}}>
            <button className="welcome-btn welcome-btn-primary" onClick={btnLogin}>Login</button>
            <button className="welcome-btn welcome-btn-secondary" onClick={btnRegister}>Register</button>
        </div>
    </div>
</div>
  )
}
