import React, { useState } from "react";
import Image1 from "../assets/Group 2.png";
import Image2 from "../assets/Ellipse 2.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.password !== input.confirmPassword) {
      return toast.error("Confirm Password does not match");
    }
    try {
      const response = await axios.post(
        "https://formbuilder-backend-1.onrender.com/register",
        {
          userName: input.userName,
          email: input.email,
          password: input.password,
        }
      );

      if (response.data.message === "success") {
        window.alert("User Successfully Registered");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        toast.error(
          `Error: ${error.response.data.message || "An error occurred"}`
        );
      } else if (error.request) {
        toast.error("No response received from server");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    } finally {
      setInput({
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <>
      <div className="register-form-body">
        <div className="register-form-subBody">
          <div style={{ width: "15%" }}>
            <img style={{ width: "100%" }} src={Image1} alt="group1" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="input-div">
                <label className="input-label">Username</label>
                <input
                  className="register-input"
                  type="text"
                  placeholder="Enter a username"
                  name="userName"
                  value={input.userName}
                  onChange={handleChange}
                />
              </div>
              <div className="input-div">
                <label className="input-label">Email</label>
                <input
                  className="register-input"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-div">
                <label className="input-label">Password</label>
                <input
                  className="register-input"
                  type="password"
                  placeholder="**********"
                  value={input.password}
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="input-div">
                <label className="input-label">Confirm Password</label>
                <input
                  className="register-input"
                  type="password"
                  placeholder="**********"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="register-btn">Sign Up</button>
              </div>
            </form>
            <div>
              <p style={{ color: "white" }}>
                Already have an account?
                <Link style={{ color: "#1a5fff" }} to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div>
            <img src={Image2} alt="ellipse 2" />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
