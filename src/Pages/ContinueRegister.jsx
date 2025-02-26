import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { DataContext } from "./AppDB";
import "../css/ContinueRegister.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';
import { Button } from "bootstrap";


export default function ContinueRegister(props) {
  const { AddUser } = useContext(DataContext);
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state || {};
  console.log("State received in ContinueRegister:", state);
  useEffect(() => {
    if (!state.email || !state.password) {
      console.log("No state found, redirecting...");
      navigate("/Register");
    }
  }, [state, navigate]);

  const [newUser, setNewUser] = useState({gender: "",birthDay: "",phone: "",city: "",name: "", email: state.email,password: state.password, image: ""});

  const chgName = (e) => setNewUser({ ...newUser, name: e.target.value });
  const chgGender = (e) => setNewUser({ ...newUser, gender: e.target.value });

  const [error, setError] = useState("");
  const handleDateChange = (date) => {
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 18);
    if (date > minDate) {
      setError("You must be at least 18 years old!");
      setNewUser({ ...newUser, birthDay: "" });
    } else {
      setError("");
      setNewUser({ ...newUser, birthDay: date });
    }
  };

  const [phoneError, setPhoneError] = useState("");
  const chgPhone = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setNewUser({ ...newUser, phone: value });
      setPhoneError("");
    } else {
      setPhoneError("invalid number.");
    }
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setNewUser({ ...newUser, image: reader.result });
      };
    }
  };

  const chgCity = (e) => setNewUser({ ...newUser, city: e.target.value });

  const ConfirmBtn = () => {
    console.log("Confirming user:", newUser);
    if (
      !newUser.name ||
      !newUser.gender ||
      !newUser.birthDay ||
      !newUser.phone ||
      !newUser.city
    ) {
      alert("Please fill in all the details before proceeding.");
      return;
    }
    const newUserId = uuidv4();
    console.log(newUserId);
    
    AddUser(
      newUserId, 
      newUser.name,
      newUser.birthDay,
      newUser.email,
      newUser.phone,
      newUser.city,
      newUser.gender,
      newUser.password,
      newUser.image
    );
  
    navigate("/Edit", { state: {uniqeId: newUserId , image: newUser.image , name: newUser.name, birthDay: newUser.birthDay, email: newUser.email, phone: newUser.phone, city: newUser}});
  };




  const btnCheckIn = () => {
    console.log("Returning to home page.");
    navigate("/");
  };

  return (
    <div className="register-container">
    <div className="container mt-5" style={{ fontFamily: "Comic sans MS ,sans-serif"}}>
      <div className="card p-4 shadow-lg" >
        <h1 className="text-center mb-4">Complete Your Profile</h1>
        <label>Name:</label>
        <input type="text" className="form-control" onChange={chgName} />
        
        <label>Gender:</label>
        <select className="form-select" onChange={chgGender}>
          <option value="">Select a Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
        
        <label>Birth Date:</label>
        <DatePicker selected={newUser.birthDay} onChange={handleDateChange} dateFormat="dd/MM/yyyy" maxDate={new Date()} showYearDropdown scrollableYearDropdown placeholderText="Select your birth date" className="form-control" />
        {error && <p className="text-danger">{error}</p>}
  
        <label>Phone:</label>
        <input type="text" className="form-control" onChange={chgPhone} />
        {phoneError && <p className="text-danger">{phoneError}</p>}
        
        <label>City:</label>
        <select className="form-select" onChange={chgCity}>
          <option value="">Select a city</option>
          <option value="Afula">Afula</option>
            <option value="Arad">Arad</option>
            <option value="Ashdod">Ashdod</option>
            <option value="Ashkelon">Ashkelon</option>
            <option value="Bat Yam">Bat Yam</option>
            <option value="Be'er Sheva">Be'er Sheva</option>
            <option value="Beit Shemesh">Beit Shemesh</option>
            <option value="Dimona">Dimona</option>
            <option value="Eilat">Eilat</option>
            <option value="Givatayim">Givatayim</option>
            <option value="Haifa">Haifa</option>
            <option value="Herzliya">Herzliya</option>
            <option value="Holon">Holon</option>
            <option value="Hod HaSharon">Hod HaSharon</option>
            <option value="Jerusalem">Jerusalem</option>
            <option value="Karmiel">Karmiel</option>
            <option value="Kfar Saba">Kfar Saba</option>
            <option value="Kiryat Ata">Kiryat Ata</option>
            <option value="Kiryat Bialik">Kiryat Bialik</option>
            <option value="Kiryat Motzkin">Kiryat Motzkin</option>
            <option value="Kiryat Ono">Kiryat Ono</option>
            <option value="Kiryat Yam">Kiryat Yam</option>
            <option value="Lod">Lod</option>
            <option value="Ma'ale Adumim">Ma'ale Adumim</option>
            <option value="Modi'in-Maccabim-Re'ut">Modi'in-Maccabim-Re'ut</option>
            <option value="Nazareth">Nazareth</option>
            <option value="Netanya">Netanya</option>
            <option value="Nes Ziona">Nes Ziona</option>
            <option value="Or Yehuda">Or Yehuda</option>
            <option value="Petah Tikva">Petah Tikva</option>
            <option value="Ramla">Ramla</option>
            <option value="Rehovot">Rehovot</option>
            <option value="Rishon LeZion">Rishon LeZion</option>
            <option value="Ramat Gan">Ramat Gan</option>
            <option value="Rosh HaAyin">Rosh HaAyin</option>
            <option value="Sderot">Sderot</option>
            <option value="Tel Aviv">Tel Aviv</option>
            <option value="Tiberias">Tiberias</option>
            <option value="Tirat Carmel">Tirat Carmel</option>
            <option value="Yavne">Yavne</option>
            <option value="Yokneam">Yokneam</option>
            <option value="Zefat">Zefat</option>
        </select>
  
        <label>Upload Profile Picture:</label>
        <input type="file" className="form-control" accept="image/*" onChange={handleImageUpload} />
        {newUser.image && <img src={newUser.image} alt="Profile Preview" className="rounded-circle mt-3" style={{ width: "150px", height: "150px", objectFit: "cover" }} />}
        
        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-primary" onClick={ConfirmBtn}>Next</button>
          <button className="btn btn-secondary" onClick={btnCheckIn}>Back</button>

        </div>
      </div>
    </div>
  </div>
  
  );
}
