import React, { useState } from "react";
import Image1 from "../assets/Group 2.png";
import Image2 from "../assets/Ellipse 2.png";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://formbuilder-backend-1.onrender.com/login",
      {
        email: input.email,
        password: input.password,
      }
    );
    if (response.data.message === "success") {
      const token = response.data.token;
      localStorage.setItem("authToken", token);
      navigate("/newForm");
    } else {
      toast.error(response.data.message);
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

              <div>
                <button className="register-btn">Login</button>
              </div>
            </form>
            <div>
              <p style={{ color: "white" }}>
                Don't have an account?
                <Link style={{ color: "#1a5fff" }} to="/register">
                  Register now
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

export default Login;
