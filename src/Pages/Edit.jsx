import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataContext } from "./AppDB";
import "../css/Edit.css";

export default function Edit() {
  const { AddUserPreference, usersDetails } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state

  const [userPreference, setUserPreference] = useState({
    uniqeId: state.uniqeId,
    preferredPartner: "",
    relationshipType: "",
    height: "",
    religion: "",
    isSmoke: "",
  });

  const chg = (e) => {
    const { name, value } = e.target;
    setUserPreference({ ...userPreference, [name]: value });
  };

  const [errorMessage, setErrorMessage] = useState("");
  const handleHeightChange = (e) => {
    const value = e.target.value;

    if (!/^\d*$/.test(value)) return;

    if (value === "") {
      setUserPreference({ ...userPreference, height: "" });
      setErrorMessage("");
      return;
    }

    const numericValue = Number(value);

    if (numericValue < 130 || numericValue > 250) {
      setErrorMessage("Height must be between 130 and 250 cm.");
    } else {
      setErrorMessage("");
    }

    setUserPreference({ ...userPreference, height: value });
  };

  const savePrefs = () => {
    if (
      !userPreference.preferredPartner ||
      !userPreference.relationshipType ||
      !userPreference.height ||
      !userPreference.religion
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if(userPreference.height < 130 || userPreference.height > 250){
      alert("Height must be between 130 and 250 cm.");
      return;
    }
    AddUserPreference(
      userPreference.uniqeId,
      userPreference.preferredPartner,
      userPreference.relationshipType,
      userPreference.height,
      userPreference.religion,
      userPreference.isSmoke
    );
    console.log("User preferences saved:", userPreference);
    navigate("/MainPage", {state: state});
    console.log(state);
  };

  return (
    <div className="preferences-container">
      <div className="preferences-card">
        <h1 className="title">Set Your Preferences</h1>
        <div className="preferences-form">
          <label>Preferred Partner:</label>
          <select
            type="text"
            className="register-input"
            name="preferredPartner"
            value={userPreference.preferredPartner}
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
            value={userPreference.relationshipType}
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
            value={userPreference.height}
            onChange={handleHeightChange}
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <label>Religion:</label>
          <select
            className="register-input"
            name="religion"
            value={userPreference.religion}
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
                userPreference.isSmoke === "yes" ? "selected" : ""
              }`}
            >
              <input
                type="checkbox"
                name="isSmoke"
                checked={userPreference.isSmoke === "yes"}
                onChange={() =>
                  chg({ target: { name: "isSmoke", value: "yes" } })
                }
              />
              Yes
            </label>

            <label
              className={`checkbox-label ${
                userPreference.isSmoke === "no" ? "selected" : ""
              }`}
            >
              <input
                type="checkbox"
                name="isSmoke"
                checked={userPreference.isSmoke === "no"}
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
          </div>
          
          {console.log(usersDetails)}
        </div>
      </div>
    </div>
  );
}
