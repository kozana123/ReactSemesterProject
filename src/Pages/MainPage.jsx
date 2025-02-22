import React, { useState, useEffect } from "react";
import "../css/MainPage.css";

export default function MainPage() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUsers = localStorage.getItem("usersDetails");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      if (users.length > 0) {
        setCurrentUser(users[users.length - 1]); 
      }
    }
  }, []);
  
  return (
    <div className="main-page">
    <h1 className="app-title"> Lovewio</h1>

    {currentUser ? (
      <div className="profile-card">
        <img
          src={currentUser.image || "/images/default-profile.png"} // תמונת ברירת מחדל
          alt="Profile"
          className="profile-image"
        />
        <div className="profile-info">
          <h2>{currentUser.name}</h2>
        </div>
      </div>
    ) : (
      <p className="loading-message">Loading user data...</p>
    )}
  </div>
  );
}
