import axios from "axios";
import React from "react";
import { useState } from "react";

const Login = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

  const goToSignup = () => {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission here with formData
    try {
      const res = await axios.post(
        "http://localhost:5500/auth/login",
        formData
      );
      alert("Stored in local storage!!");
      setFormData({
        email: "",
        password: "",
      })
    } catch (err) {
      alert(err.message);
      setFormData({
        email: "",
        password: "",
      })
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center", backgroundColor: "aliceblue" }}>
        <h3 style={{ backgroundColor: "whitesmoke" }}>Login</h3>
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <small>
            <b>Create a new account</b>
          </small>
          <br />
          <button className="btn btn-primary" onClick={goToSignup}>
            Sign Up
          </button>
        </form>
      </div>
      <p
        style={{
          width: "500px",
          textAlign: "center",
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#2a20c1",
          marginTop: "30px",
        }}
      >
        Cultivate a love for reading, and you'll never be alone. With every book
        you open, you embark on a journey into the minds of others, exploring
        their dreams, their knowledge, and their stories. Reading is not just a
        pastime; it's a lifelong adventure that expands your horizons and
        enriches your soul, filling your life with the wisdom and experiences of
        countless authors who have come before you. So, read with your heart,
        and you'll find that every page is a door to a new world waiting to be
        discovered.
      </p>
    </div>
  );
};

export default Login;
