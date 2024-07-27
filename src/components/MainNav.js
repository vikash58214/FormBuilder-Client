import React from "react";
import Icon from "../assets/formIcon.png";
import "../style/MainNav.css";

const MainNav = ({ loginButton, signInButton }) => {
  return (
    <>
      <div className="nav-body">
        <div className="nav-sub-body">
          <div className="nav-icon-container">
            <img src={Icon} className="nav-icon-img" alt="icon" />
            <h4 className="nav-icon-txt">FormBot</h4>
          </div>
          <div className="nav-button-container">
            <button onClick={loginButton} className="nav-sign-btn">
              Sign in
            </button>
            <button onClick={signInButton} className="nav-create-btn">
              Create a FromBot
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
