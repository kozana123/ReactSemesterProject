import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/WelcomePage.css";


export default function WelcomePage() {

    const navigate = useNavigate();


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
