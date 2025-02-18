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
    <div>
        <h1>Loview</h1>
        <img src="/public/Pictures/AppIcon.png" alt="" /><br />
        <button onClick={btnLogin}>Login</button><br />
        <button onClick={btnRegister}>Register</button>


    </div>
  )
}
