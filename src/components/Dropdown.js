import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import "../style/Dropdown.css";

const Dropdown = ({ name }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSetting = () => {
    navigate("/setting");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const options = [
    { label: "Setting", action: handleSetting },
    { label: "Logout", action: handleLogout },
  ];

  return (
    <div className="dropdown">
      <button onClick={handleDropdownToggle} className="dropdown-toggle">
        {name}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li onClick={option.action} key={index} className="dropdown-item">
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
