import React, { useContext } from "react";
import { DataContext } from "./AppDB";
import { useNavigate, useLocation } from "react-router-dom";

export default function Setting() {
  const { deleteUser } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const connectedUser = location.state;

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete your account?");
    if (isConfirmed) {
      deleteUser(connectedUser.uniqeId);
      navigate("/"); 
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <button onClick={handleDelete} style={{ backgroundColor: "red", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" }}>
        Delete Account
      </button>
    </div>
  );
}
