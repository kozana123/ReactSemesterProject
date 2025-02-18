import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from "react";
import { DataContext } from "./AppDB";

export default function Login(props) {

    const navigate = useNavigate();
    const {state} = useLocation();
    const {usersDetails} = useContext(DataContext);
    const [user, setUser] = useState({userName: '', password: ''});

    const btnCheckIn = () =>{
        navigate('/',{state: usersList})
    }

    const btnHP = () => {
        const foundUser = usersDetails.find(userDetails => 
            userDetails.name === user.userName && userDetails.password === user.password
        );
    
        if (foundUser) {
            console.log("exist");
        } else {
            console.log("Not exist");
        }
    };

    const chgUserName = (e) => {
        setUser({...user, userName: e.target.value});
    }

    const chgPassword = (e) => {
        setUser({...user, password: e.target.value});
    }

  return (
    <div>Login
        <div>
            Username: <input type="text" onChange={chgUserName} /><br />
            Password: <input type="text" onChange={chgPassword} />
        </div>
        <div>
            <button onClick={btnHP}>Login</button>
            <button onClick={btnCheckIn}>Check In</button>        
        </div>
    </div>
  )
}