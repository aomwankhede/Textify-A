import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import axios from "axios";
import { toggleFunc } from "../Redux/Action/authActCreator";

const Signup = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=>state.isLoggedIn)
  const navigate = useNavigate();
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    email: "",
    password: "",
    recoveryEmail: "",
  });

  const handleInputFocus = (inputId) => {
    setFocusedInput(inputId);
  };

  const handleInputBlur = () => {
    setFocusedInput(null);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5500/auth/signup", formData);
      alert("User Created");
      const actionObject = toggleFunc(true);
      dispatch(actionObject);

      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        password: "",
        recoveryEmail: "",
      });
    } catch (err) {
      alert(err.message);
      setFormData({
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        password: "",
        recoveryEmail: "",
      });
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ backgroundColor: "aliceblue" }}>
        Welcome to the world of reading!!
      </h3>
      <form
        style={{
          border: "1px solid grey",
          borderRadius: "10px",
          width: "500px",
          textAlign: "center",
          padding: "20px",
        }}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input
            required
            type="text"
            className="form-control mb-2"
            id="firstName"
            placeholder={focusedInput === "firstName" ? "" : "First Name"}
            onFocus={() => handleInputFocus("firstName")}
            onBlur={handleInputBlur}
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            required
            type="text"
            className="form-control mb-2"
            id="lastName"
            placeholder={focusedInput === "lastName" ? "" : "Last Name"}
            onFocus={() => handleInputFocus("lastName")}
            onBlur={handleInputBlur}
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            required
            type="date"
            className="form-control mb-2"
            id="dob"
            placeholder={focusedInput === "dob" ? "" : "DOB"}
            onFocus={() => handleInputFocus("dob")}
            onBlur={handleInputBlur}
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            required
            type="text"
            className="form-control mb-2"
            id="gender"
            placeholder={focusedInput === "gender" ? "" : "Gender"}
            onFocus={() => handleInputFocus("gender")}
            onBlur={handleInputBlur}
            value={formData.gender}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            required
            type="email"
            className="form-control mb-2"
            id="email"
            placeholder={focusedInput === "email" ? "" : "Email"}
            onFocus={() => handleInputFocus("email")}
            onBlur={handleInputBlur}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            required
            minLength={5}
            type="password"
            className="form-control mb-2"
            id="password"
            placeholder={focusedInput === "password" ? "" : "Password"}
            onFocus={() => handleInputFocus("password")}
            onBlur={handleInputBlur}
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            required
            type="email"
            className="form-control mb-2"
            id="recoveryEmail"
            placeholder={
              focusedInput === "recoveryEmail" ? "" : "Recovery Email"
            }
            onFocus={() => handleInputFocus("recoveryEmail")}
            onBlur={handleInputBlur}
            value={formData.recoveryEmail}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isLoggedIn && navigate("/")}
          Submit
        </button>
        <br />
        <small>
          <b>Already have account?</b>
        </small>
        <br />
      </form>
      <Link className="btn btn-primary" to="/login">
        Login
      </Link>
    </div>
  );
};

export default Signup;
