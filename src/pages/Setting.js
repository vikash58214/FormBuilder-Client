import React from "react";
import "../style/Setting.css";

const Setting = () => {
  return (
    <>
      <div className="setting-body">
        <div style={{ paddingTop: "50px", marginBottom: "80px" }}>
          <h4 style={{ textAlign: "center", color: "white", fontSize: "3vh" }}>
            Setting
          </h4>
        </div>
        <div className="setting-subBody">
          <div className="settingForm">
            <form style={{ display: "flex", flexDirection: "column" }}>
              <input className="setting-input" placeholder="Name" type="text" />
              <input
                className="setting-input"
                placeholder="Update Email"
                type="email"
              />
              <input
                className="setting-input"
                placeholder="Old Password"
                type="password"
              />
              <input
                className="setting-input"
                placeholder="New Password"
                type="password"
              />
              <button className="setting-button">Update</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
