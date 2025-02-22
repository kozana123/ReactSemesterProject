import React from 'react'
import { useState } from "react";
import { createContext } from "react";



export const DataContext = createContext(null);
 
export default function AppDB(props) {

    const [usersDetails, setUserDetails] = useState(() => {
      const storedUsers = localStorage.getItem('usersDetails');
      return storedUsers ? JSON.parse(storedUsers) : [{ uniqeIdUser: 1, name: 'Dor', birthDay: '12/12/2020', email: '', phone: '', city: '', gender: '', password: '1234', image: '' }];
    });
    const [userPreference , setUserPreference] = useState(() => {
      const storedPreferences = localStorage.getItem('userPreference');
      return storedPreferences ? JSON.parse(storedPreferences) : [{ uniqeId: 1, preferredPartner: '', relationshipType: '', height: '', religion: '', isSmoke: '' }];
    });

    const AddUser = (uniqeId, name , birthDay , email ,phone , city , gender , password , image) => {
      let newUser = [...usersDetails, { uniqeId, name, birthDay, email, phone, city, gender, password , image}];
      // setUserDetails(newUser);
      localStorage.setItem('usersDetails', JSON.stringify(newUser));
    }

    const AddUserPreference = (uniqeIdUser , preferredPartner , relationshipType , height , religion , isSmoke) => {
      let newUserPreference = [...userPreference, {uniqeIdUser, preferredPartner, relationshipType, height, religion, isSmoke}];
      // setUserPreference(newUserPreference);
      localStorage.setItem('userPreference', JSON.stringify(newUserPreference));
    }
    
  return (
    <DataContext.Provider value = {{usersDetails,setUserDetails, userPreference,setUserPreference, AddUser, AddUserPreference}}>
        {props.children}
    </DataContext.Provider>
  )
}
