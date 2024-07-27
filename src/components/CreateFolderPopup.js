import axios from "axios";
import React, { useState } from "react";
import "../style/CreateFolderPopup.css";

const CreateFolderPopup = ({ handlePopup, userID, addNewFolder }) => {
  const [input, setInput] = useState("");
  const handleClosePopup = () => {
    handlePopup(false);
  };
  const createFolder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://formbuilder-backend-1.onrender.com/createFolder",
        {
          name: input,
          folderOwner: userID,
        }
      );
      addNewFolder(response.data.folder);
      handlePopup(false);
    } catch (error) {
      console.log("error creating folder", error);
    }
  };
  return (
    <>
      <div className="popup-body">
        <div className="popup-subBody">
          <h3 style={{ margin: "0", color: "white" }}>Create New Folder</h3>
          <form onSubmit={createFolder} style={{ marginTop: "10px" }}>
            <input
              className="popup-input"
              type="text"
              placeholder="Enter folder name"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "15px",
              }}
            >
              <button className="popup-done-btn">Done</button>
              <button className="popup-cancel-btn" onClick={handleClosePopup}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateFolderPopup;
