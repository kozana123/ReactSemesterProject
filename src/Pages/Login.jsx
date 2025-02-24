import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./AppDB";
import "../css/Login.css";

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
      navigate("/MainPage");
    } else {
      setError("Invalid email or password");
    }
  };

  const chgUserName = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const chgPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Loviow</h1>
        <img
          src="/public/Pictures/video_movie_player_clip-09-512.webp"
          alt=""
          style={{ width: 150 }}
        />
        <br />
        <div className="login-form">
          <label className="login-label">Email:</label>
          <input type="email" className="login-input" onChange={chgUserName} />

          <label className="login-label">Password:</label>
          <input
            type="password"
            className="login-input"
            onChange={chgPassword}
          />
        </div>

        {error && <p className="login-error">{error}</p>}

        <div className="login-buttons">
          <button className="login-btn login-btn-primary" onClick={btnHP}>
            Login
          </button>
          <button
            className="login-btn login-btn-secondary"
            onClick={btnCheckIn}
          >Don't have an account? Register here..
          </button>
        </div>
      </div>
    </div>
  );
}
