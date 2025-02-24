import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./AppDB";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Register.css";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";


export default function Register(props) {

  const { usersDetails } = useContext(DataContext);
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const ConfirmBtn = () => {
    let isExist = false;
    console.log(usersDetails);
    console.log("Checking for:", newUser.email);

    if (newUser.email === "" || newUser.password === "") {
      console.log("Its empty");
      isExist = true;
    }

    if (isExist == false) {
      const foundUser = usersDetails.find(
        (userDetails) =>
          userDetails.email === newUser.email
      );
      
      if(foundUser){
        setError("This Email is already in use");
      }
      else{
        navigate("/ContinueRegister", { state: newUser });
      }
      
    }
  };

  const btnCheckIn = () => {
    navigate("/", { state: usersDetails });
  };

  const chgEmail = (e) => {
    setNewUser({ ...newUser, email: e.target.value });
  };

  const chgPassword = (e) => {
    setNewUser({ ...newUser, password: e.target.value });
  };

  return (
    <Container className="register-container-">
    <Card className="register-card-">
      <Card.Body>
        <Card.Title className="register-title">Register</Card.Title>
        <Form className="register-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="register-label">Email:</Form.Label>
            <Form.Control
              type="email"
              className="register-input"
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="register-label">Password:</Form.Label>
            <Form.Control
              type="password"
              className="register-input"
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
          </Form.Group>
        </Form>

        {error && <Alert variant="danger" className="register-error">{error}</Alert>}

        <div className="register-buttons">
          <Button variant="primary" className="register-btn" onClick={ConfirmBtn}>
            Next
          </Button>
          <Button variant="secondary" className="register-btn" onClick={() => navigate("/")}>Back</Button>
        </div>
      </Card.Body>
    </Card>
  </Container>
  );
}
