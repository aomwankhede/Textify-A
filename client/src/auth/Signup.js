import React, { useState } from "react";

const Signup = () => {
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

  const goToLogin = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here with formData
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "aliceblue" }}>
      <h3 style={{ backgroundColor: "whitesmoke" }}>SignUp</h3>
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
        <div className="form-group">
          <input
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
          Submit
        </button>
        <br />
        <small>
          <b>Already have account?</b>
        </small>
        <br />
        <button className="btn btn-primary" onClick={goToLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Signup;
