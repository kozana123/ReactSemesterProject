import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { DataContext } from "./AppDB";
import { useContext } from "react";

export default function SearchChat() {
  const navigate = useNavigate();
  const loginUser = useLocation();
  const connectedUser = loginUser.state;

  const { usersInSearch } = useContext(DataContext);

  console.log(usersInSearch);

  return (
    <div className="main-page">
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="black"
      className="back-arrow"
      viewBox="0 0 16 16"
      onClick={() => navigate(-1)}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "absolute",
        top: "50px",
        right: "50px",
        cursor: "pointer",
      }}
    >
      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
    </motion.svg>

    <img
      src="/public/Pictures/video_movie_player_clip-09-512.webp"
      alt="Logo"
      style={{ width: 70 }}
    />
    <h1 className="app-title">Lovewio</h1>
    <br />
    <br />
    <br />
    <motion.h5
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
    >
      Searching for connection...
    </motion.h5>
    <div
      style={{
        marginTop: "30px",
        background: "rgb(113, 55, 55)",
        padding: "40px",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <img
        src={connectedUser.image}
        alt="Profile"
        className="profile-image"
      />
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="130"
        height="80"
        fill="white"
        className="bi bi-person-hearts"
        viewBox="0 0 16 16"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          fillRule="evenodd"
          d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"
        />
      </motion.svg>
    </div>
  </div>
);
}
