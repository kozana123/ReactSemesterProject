import React, { useContext } from "react";
import { DataContext } from "./AppDB";
import { useNavigate, useLocation } from "react-router-dom";
import { Container , Card , Button} from "react-bootstrap";



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
    <Container className="register-container">
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

        <Button >
          
        </Button>
      </Card>
    </Container>
  );
}
