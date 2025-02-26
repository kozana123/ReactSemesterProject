import React, { useState, useEffect } from "react";
import "../css/MainPage.css";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./AppDB";
import { useContext } from "react";



export default function MainPage() {


  const {userPreference} = useContext(DataContext);
  const navigate = useNavigate();
  const loginUser = useLocation();
  const connectedUser = loginUser.state
  console.log(loginUser);
  console.log("hi" , connectedUser);
  
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const storedUsers = localStorage.getItem("usersDetails");
  //   if (storedUsers) {
  //     const users = JSON.parse(storedUsers);
  //     if (users.length > 0) {
  //       setCurrentUser(users[users.length - 1]); 
  //     }
  //   }
  // }, []);

  const moveToEdit = () => {
    console.log(userPreference)
    const connectedUserPreference = userPreference.find(
      (checkUserPreference) =>
          checkUserPreference.uniqeId === connectedUser.uniqeId
    );
    console.log(connectedUserPreference);
    navigate("/ConnectedUserEdit", {state: {connectedUser, connectedUserPreference}})
  };
  
  return (
    <div className="main-page">
    <h1 className="app-title"> Lovewio</h1>

    {connectedUser ? (
      <div className="profile-card" onClick={moveToEdit}>
        <img
          src={connectedUser.image || "/images/default-profile.png"} // תמונת ברירת מחדל
          alt="Profile"
          className="profile-image"
        />
      
      
          <h2 className="profile-info">{connectedUser.name} </h2>
        
        
      </div>
    ) : (
      <p className="loading-message">Loading user data...</p>
    )}
  </div>
  );
}
