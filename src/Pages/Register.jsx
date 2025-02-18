import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import AppDB from './AppDB';
import { useContext } from "react";
import { DataContext } from "./AppDB";

export default function Register(props) {

    const {usersDetails} = useContext(DataContext);
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({ email: '' , password: ''})

    const ConfirmBtn = () =>{
        let isExist = false
        
        if(newUser.userName == '' || newUser.password == ''){
            console.log("Its empty")
            isExist = true
        } 

        usersDetails.forEach(user => {   
            if(user.email === newUser.email){
                console.log("The user is exist")
                isExist = true
            }
        });

        if(isExist == false){
            navigate('/RegisterPassword', {state: newUser})
        }

    }

    const btnCheckIn = () =>{
        navigate('/',{state:usersList})
    }

    const chgUserName = (e) => {
        setNewUser({...newUser, userName: e.target.value});
    }

    const chgPassword = (e) => {
        setNewUser({...newUser, password: e.target.value});
    }        

  return (
    <div>Register
        <div>
            Email: <input type="text" m onChange={chgUserName} /><br />
            Password: <input type="text" onChange={chgPassword} /><br />
        </div>
        <div>
            <button onClick={ConfirmBtn}>Next</button>
            <button onClick={btnCheckIn}>Check In</button>
        </div>

         
    </div>
  )
}
