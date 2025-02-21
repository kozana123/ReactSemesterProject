import React from 'react'
import { useState } from "react";
import { createContext } from "react";



export const DataContext = createContext(null);
 
export default function AppDB(props) {

    const [usersDetails, setUserDetails] = useState([{ uniqeIdUser: 1, name: 'Dor', birthDay: '12/12/2020' , email: '' , phone: '' , city: '' , gender: '' , password: '1234'}]);
    const [userPreference , setUserPreference] = useState([{ uniqeId: 1, preferredPartner:'' , relationshipType:'' , height: '', religion: '' , isSmoke: ''}]);
    const [userMatch , setUserMatch] = useState([{ uniqeId: 1, matchId: ''}]);


    const AddUser = (uniqeId, name , birthDay , email ,phone , city , gender , password) => {
      let newUser = [...usersDetails, { uniqeId, name, birthDay, email, phone, city, gender, password}];
      setUserDetails(newUser);
    }

    const AddUserPreference = (uniqeIdUser , preferredPartner , relationshipType , height , religion , isSmoke) => {
      let newUserPreference = [...userPreference, {uniqeIdUser, preferredPartner, relationshipType, height, religion, isSmoke}];
      setUserPreference(newUserPreference);
    }
    
  return (
    <DataContext.Provider value = {{usersDetails,setUserDetails, userPreference,setUserPreference, AddUser, AddUserPreference}}>
        {props.children}
    </DataContext.Provider>
  )
}
