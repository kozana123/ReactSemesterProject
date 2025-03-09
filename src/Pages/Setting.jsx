import React, { useContext } from "react";
import { DataContext } from "./AppDB";
import { useNavigate, useLocation } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Setting() {
  const { deleteUser } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const connectedUser = location.state;

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete your account?"
    );
    if (isConfirmed) {
      deleteUser(connectedUser.uniqeId);
      navigate("/");
    }
  };

  return (
    <Container className="register-container" style={{ position: "relative" }}>
      {/* חץ לחזרה לדף הקודם */}
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="black"
        className="back-arrow"
        viewBox="0 0 16 16"
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "absolute",
          top: "40px",
          right: "40px",
          cursor: "pointer",
          zIndex: 10,
         
        }}
      >
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
      </motion.svg>

      <Card className="register-container card">
        <h1>Settings</h1>
        <Button
          onClick={handleDelete}
          style={{
            backgroundColor: "#9b6060",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Delete Account
        </Button>
      </Card>
    </Container>
  );
}
