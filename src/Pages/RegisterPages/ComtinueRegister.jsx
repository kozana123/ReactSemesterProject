import React from 'react'
import { useContext } from "react";
import { DataContext } from "./AppDB";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ComtinueRegister(props) {

    const {usersDetails} = useContext(DataContext);
    const navigate = useNavigate();
    const {state} = useLocation();
   

    const [newUser, setNewUser] = useState({ gender: '' , birthDay: '' , phone: '' , city: '' , name: '' , email: state.email , password: state.password});

    const ConfirmBtn = () =>{}
    
  return (
    <div>ComtinueRegister
              <div>
            Name: <input type="text" onChange={chgName} /><br />
            Gender: <input type="text" m onChange={chgGender} /><br />
            Birth Day: <input type="text" onChange={chgBirthDay} /><br />
            Phone: <input type="text" onChange={chgPhone} /><br />
            City: <input type="text" onChange={chgCity} /><br />
           
        </div>
        <div>
            <button onClick={ConfirmBtn}>Next</button>
            <button onClick={btnCheckIn}>Check In</button>
        </div>
    </div>
  )
}
