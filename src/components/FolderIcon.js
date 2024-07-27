import React, { useState } from "react";
import BinIcon from "../assets/BinIcon.png";
import axios from "axios";
import DeleteFolderAlert from "./DeleteFolderAlert";
import "../style/FolderIcon.css";

const FolderIcon = ({ namee, folderID, setFolderSelected, deleteFolder }) => {
  const [deletePopup, setDeletePopup] = useState(false);
  const handleFolderDelete = async () => {
    setDeletePopup(true);
    if (deletePopup) {
      try {
        const response = await axios.delete(
          `https://formbuilder-backend-1.onrender.com/deleteFolder/${folderID}`
        );
        deleteFolder(folderID);
        if (response.data.message === "success") {
          setDeletePopup(false);
        }
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const fetchFolderID = () => {
    setFolderSelected(true);
    localStorage.setItem("folderID", folderID);
  };
  return (
    <>
      <div className="create-folder" onClick={() => fetchFolderID()}>
        <div>{namee}</div>
        <div onClick={() => setDeletePopup(true)}>
          <img src={BinIcon} alt="binIcon" />
        </div>
      </div>
      {deletePopup && (
        <DeleteFolderAlert
          setDeletePopup={setDeletePopup}
          handleFolderDelete={handleFolderDelete}
        />
      )}
    </>
  );
};

export default FolderIcon;
