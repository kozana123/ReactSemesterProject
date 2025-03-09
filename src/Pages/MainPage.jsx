import React, { useState, useEffect } from "react";
import "../css/MainPage.css";
import { useLocation } from "react-router-dom";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { DataContext } from "./AppDB";
import { useContext } from "react";
import { motion } from "framer-motion";

export default function MainPage() {
  const { userPreference, AddusersInSearch } = useContext(DataContext);
  const navigate = useNavigate();
   const loginUser = useLocation();
  const connectedUser = loginUser.state;
  console.log(loginUser);
  console.log("hi", connectedUser);

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
    console.log(userPreference);
    const connectedUserPreference = userPreference.find(
      (checkUserPreference) =>
        checkUserPreference.uniqeId === connectedUser.uniqeId
    );
    console.log(connectedUserPreference);
    navigate("/ConnectedUserEdit", { state: { connectedUser, connectedUserPreference } });

  };

  const EnterSearchChat = () => {
    AddusersInSearch(connectedUser.uniqeId);
    navigate("/SearchChat", { state: connectedUser });
  };

  return (
    <div className="main-page">
     <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="currentColor" 
      className="bi bi-list" onClick={() => navigate("/Setting" ,{ state: connectedUser })}
      viewBox="0 0 16 16"
      style={{
        position: "absolute",
        top: "40px",
        left: "40px",
        width: "30px",
        height: "30px",
        cursor: "pointer"
      }}>
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>

      <img
        src="/public/Pictures/video_movie_player_clip-09-512.webp"
        alt="Logo"
        style={{ width: 70 }}
      />

      <h1 className="app-title">Lovewio</h1>

      {connectedUser ? (
        <div className="profile-card" onClick={moveToEdit}>
          <div className="profile-image-wrapper">
            <img
              src={connectedUser.image} 
              alt="Profile"
              className="profile-image"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              fill="currentColor"
              className="bi bi-pencil-square edit-icon"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5.5 0 0 0-.121.196l-.805 2.414a.25.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </div>
          <h3 className="profile-info">Hello, {connectedUser.name}</h3>
        </div>
      ) : (
        <p className="loading-message">Loading user data...</p>
      )}

      <motion.div
        className="centered-icon"
        onClick={EnterSearchChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 150 }}
      >
        <motion.img
          src="/public/Pictures/LovePic.png"
          alt="pic"
          style={{ width: 100 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: [1, 1.05, 1] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <button className="btnTap">
        Tap on the icon button <br></br> above to make your first video chat!
      </button>
    </div>
  );
}
