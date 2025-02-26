import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "./AppDB";
import { useContext } from "react";
import "../css/Edit.css";





export default function ConnectedUserEdit() {
    
    const {updateUserPreference} = useContext(DataContext);
    const navigate = useNavigate();
    const location = useLocation();
    const connectedUser = location.state.connectedUser;
    const connectedUserPreference = location.state.connectedUserPreference
    console.log(connectedUser);
    console.log(connectedUserPreference);


    const [userNewPreference, setNewUserPreference] = useState({
      uniqeId: connectedUser.uniqeId,
      preferredPartner: connectedUserPreference.preferredPartner,
      relationshipType: connectedUserPreference.relationshipType,
      height: connectedUserPreference.height,
      religion: connectedUserPreference.religion,
      isSmoke: connectedUserPreference.isSmoke,
    });
  
    const chg = (e) => {
      const { name, value } = e.target;
      setNewUserPreference({ ...userNewPreference, [name]: value });
    };
  
    const [errorMessage, setErrorMessage] = useState("");
    const handleHeightChange = (e) => {
      const value = e.target.value;
  
      if (!/^\d*$/.test(value)) return;
  
      if (value === "") {
        setNewUserPreference({ ...userNewPreference, height: "" });
        setErrorMessage("");
        return;
      }
  
      const numericValue = Number(value);
  
      if (numericValue < 130 || numericValue > 250) {
        setErrorMessage("Height must be between 130 and 250 cm.");
      } else {
        setErrorMessage("");
      }
  
      setNewUserPreference({ ...userNewPreference, height: value });
    };

    const backBtn = () => {
        navigate("/MainPage", {state: connectedUser});
    }
  
    const savePrefs = () => {
      if (
        !userNewPreference.preferredPartner ||
        !userNewPreference.relationshipType ||
        !userNewPreference.height ||
        !userNewPreference.religion
      ) {
        alert("Please fill in all fields.");
        return;
      }
      if(userNewPreference.height < 130 || userNewPreference.height > 250){
        alert("Height must be between 130 and 250 cm.");
        return;
      }
      console.log(userNewPreference.uniqeId);
      
      updateUserPreference(
        userNewPreference.uniqeId,
        userNewPreference.preferredPartner,
        userNewPreference.relationshipType,
        userNewPreference.height,
        userNewPreference.religion,
        userNewPreference.isSmoke
      );
      console.log("User preferences saved:", userNewPreference);
      navigate("/MainPage", {state: connectedUser});
    };
  
    return (
      <div className="preferences-container">
        <div className="preferences-card" style={{fontFamily: "Comic sans MS, sans-serif"}}>
          <h1 className="title"  style={{fontFamily: "Comic sans MS, sans-serif"}}> Set Your Preferences</h1>
          <div className="preferences-form">
            <label>Preferred Partner:</label>
            <select
              type="text"
              className="register-input"
              name="preferredPartner"
              value={userNewPreference.preferredPartner}
              onChange={chg}
            >
              <option value="">Select a Type</option>
              <option value="Female">Female</option>
              <option value="Male">Male</option>
              <option value="Other">Other</option>
            </select>
  
            <label>Relationship Type:</label>
            <select
              className="register-input"
              name="relationshipType"
              value={userNewPreference.relationshipType}
              onChange={chg}
            >
              <option value="">Select a Type</option>
              <option value="Serious">Serious</option>
              <option value="Casual">Casual</option>
              <option value="Friendship">Friendship</option>
            </select>
  
            <label>Height:</label>
            <input
              type="text"
              className="register-input"
              name="height"
              value={userNewPreference.height}
              onChange={handleHeightChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
  
            <label>Religion:</label>
            <select
              className="register-input"
              name="religion"
              value={userNewPreference.religion}
              onChange={chg}
            >
              <option value="">Select Religion</option>
              <option value="Jewish">Jewish</option>
              <option value="Christian">Christian</option>
              <option value="Muslim">Muslim</option>
              <option value="Other">Other</option>
            </select>
  
            <label>Smoke:</label>
            <div className="checkbox-group">
              <label
                className={`checkbox-label ${
                    userNewPreference.isSmoke === "yes" ? "selected" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="isSmoke"
                  checked={userNewPreference.isSmoke === "yes"}
                  onChange={() =>
                    chg({ target: { name: "isSmoke", value: "yes" } })
                  }
                />
                Yes
              </label>
  
              <label
                className={`checkbox-label ${
                    userNewPreference.isSmoke === "no" ? "selected" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="isSmoke"
                  checked={userNewPreference.isSmoke === "no"}
                  onChange={() =>
                    chg({ target: { name: "isSmoke", value: "no" } })
                  }
                />
                No
              </label>
            </div>
            <div className="register-buttons">
              <button className="register-btn next" onClick={savePrefs}>
                Save
              </button>
              <button className="register-btn back" onClick={backBtn}>
                Back
              </button>
            </div>
          
          </div>
        </div>
      </div>
    );
}
