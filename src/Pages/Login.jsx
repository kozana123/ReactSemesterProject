import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./AppDB";
import "../css/Login.css";

export default function Login(props) {
    const navigate = useNavigate();
    const { usersDetails } = useContext(DataContext);
    const [user, setUser] = useState({ email: '', password: '' });
    const [error, setError] = useState("");

    const btnCheckIn = () => {
        navigate('/Register', { state: usersDetails });
    };

    const btnHP = () => {
        const foundUser = usersDetails.find(userDetails => 
            userDetails.email === user.email && userDetails.password === user.password
        );

        if (foundUser) {
            console.log("exist");
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
        <h1 className="login-title">Login</h1>
        <div>
          <label className="login-label">Email:</label>
          <input type="text" className="login-input" onChange={chgUserName} />

          <label className="login-label">Password:</label>
          <input
            type="password"
            className="login-input"
            onChange={chgPassword}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="login-buttons">
          <button className="login-btn login-btn-primary" onClick={btnHP}>
            Login
          </button>
          <button
            className="login-btn login-btn-secondary"
            onClick={btnCheckIn}
          >
            Not Register yet?
          </button>
        </div>
      </div>
    </div>
  );
}
