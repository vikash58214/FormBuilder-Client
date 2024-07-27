import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/FileNav.css";

const FileNav = ({ handleSave, saveBtn, shareBtn, handleShare, formID }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="create-bot-nav">
        <div className="create-botname">
          <input
            style={{
              backgroundColor: "#37373E",
              borderRadius: "5px",
              border: "none",
              height: "23px",
              paddingLeft: "10px",
              color: "white",
            }}
            placeholder="Enter Form Name"
            type="text"
          />
        </div>
        <div className="create-bot-mid-btns">
          <button
            onClick={() => navigate(`/create-typebot/${formID}`)}
            className="flowBtn"
          >
            Flow
          </button>
          <button className="themeBtn">Theme</button>
          <button
            onClick={() => navigate(`/analytics/${formID}`)}
            className="resBtn"
          >
            Response
          </button>
        </div>
        <div className="create-bot-right-btns">
          {shareBtn ? (
            <button onClick={handleShare} className="share-active">
              Share
            </button>
          ) : (
            <button className="share-inactive">Share</button>
          )}

          {saveBtn ? (
            <button className="save-active" onClick={handleSave}>
              Save
            </button>
          ) : (
            <button className="share-inactive">Save</button>
          )}

          <button className="xbtn" onClick={() => navigate("/newForm")}>
            X
          </button>
        </div>
      </div>
    </>
  );
};

export default FileNav;
