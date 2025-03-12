
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./AppDB";
import "../css/Login.css";
import { Card, Button, Form, Alert, Container } from "react-bootstrap";

export default function Login(props) {
  const navigate = useNavigate();
  const { usersDetails } = useContext(DataContext);
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
 

  console.log(usersDetails);

  const btnCheckIn = () => {
    navigate("/Register");
  };

  const btnHP = () => {
    const foundUser = usersDetails.find(
      (userDetails) =>
        userDetails.email === user.email &&
        userDetails.password === user.password
    );

    if (foundUser) {
      navigate("/MainPage", {state: foundUser});
    } else {
      setError("Invalid email or password");
    }
  };


  return (
<Container className="d-flex justify-content-center align-items-center vh-100 login-container">
      <Card className="p-4 login-card shadow-lg">
        <Card.Body className="text-center">
          <Card.Title className="login-title" style={{fontWeight: "bold"  ,fontSize:"40px"}}>Loviow</Card.Title>
          <img
            src="/public/Pictures/video_movie_player_clip-09-512.webp"
            alt="Logo"
            style={{ width: 150 }}
          />
          <br />
          <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="login-label"  style={{fontFamily: "Comic sans MS, sans-serif"}}>Email:</Form.Label>
              <Form.Control
                type="email"
                className="login-input"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="login-label"  style={{fontFamily: "Comic sans MS, sans-serif"}}>Password:</Form.Label>
              <Form.Control
                type="password"
                className="login-input"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </Form.Group>
          </Form>

          {error && <Alert variant="danger" className="login-error">{error}</Alert>}

          <div className="login-buttons d-grid gap-2">
            <Button variant="primary" className="login-btn" onClick={btnHP}>
              Login
            </Button>
            <Button
              variant="outline-secondary"
              className="login-btn-"
              onClick={btnCheckIn}
            >
              Don't have an account? Register here..
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
