import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "./AppDB";
import "../css/Register.css";

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
    <div className="register-container-">
    <div className="register-card">
    <div className="register-form">
    <h1 className="register-title">Register</h1>
      <label className="register-label">Email:</label>
      <input 
        type="text" 
        className="register-input" 
        onChange={chgEmail} 
      />

      <label className="register-label">Password:</label>
      <input 
        type="password" 
        className="register-input" 
        onChange={chgPassword} 
      />
    </div>
    {error && <p className="login-error">{error}</p>}
    <div className="register-buttons">
      <button className="register-btn register-btn-primary" onClick={ConfirmBtn}>
        Next
      </button>
      <button className="register-btn register-btn-secondary" onClick={btnCheckIn}>
        Back
      </button>
    </div>
  </div>
</div>
  );
}
