import React, { useCallback, useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import CreateFolderPopup from "../components/CreateFolderPopup";
import axios from "axios";
import FolderIcon from "../components/FolderIcon";
import { useNavigate } from "react-router-dom";
import Delete from "../assets/delete.png";
import "../style/CreateNewForm.css";

const CreateNewForm = () => {
  const navigate = useNavigate();
  const [createFolderPopup, setCreateFolderPopup] = useState(false);
  const [folderSelected, setFolderSelected] = useState(false);
  const [selectedFolderID, setSelectedFolderID] = useState(null);
  const [forms, setForms] = useState([]);
  const [user, setUser] = useState({});
  const [folders, setFolders] = useState([]);
  const [folderID, setFolderID] = useState("");
  const handleCreateFolder = () => {
    setCreateFolderPopup(true);
  };

  const redirectTOFormPage = (formIDvalue) => {
    navigate(`/create-typebot/${formIDvalue}`);
  };

  const makeAuthReq = useCallback(async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const response = await axios.get(
          "https://formbuilder-backend-1.onrender.com/getUser",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    } else {
      console.log("No token found");
    }
  }, []);

  const fetchFolder = useCallback(async () => {
    if (!user) return;
    try {
      const response = await axios.get(
        `https://formbuilder-backend-1.onrender.com/getFolder/${user._id}`
      );
      if (response && response.data) {
        setFolders(response.data);
      }
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  }, [user]);

  useEffect(() => {
    makeAuthReq();
  }, [makeAuthReq]);

  useEffect(() => {
    if (user) {
      fetchFolder();
    }
  }, [fetchFolder, user]);

  const addNewFolder = (newFolder) => {
    setFolders((prevFolders) => [...prevFolders, newFolder]);
  };

  const deleteFolder = (folderID) => {
    setFolders((prevFolders) =>
      prevFolders.filter((folder) => folder._id !== folderID)
    );
  };

  const handleCreateTypebot = () => {
    navigate("/create-typebot");
  };

  const fetchForm = async () => {
    try {
      const response = await axios.get(
        `https://formbuilder-backend-1.onrender.com/api/allforms/${folderID}`
      );
      if (response && response.data) {
        setForms(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (folderID) {
      fetchForm();
    }
  }, [folderID]);

  const handleFormDelete = async (formID, event) => {
    event.stopPropagation();
    try {
      await axios.delete(
        `https://formbuilder-backend-1.onrender.com/deleteForm/${formID}`
      );
      setForms((prevForms) => prevForms.filter((form) => form._id !== formID));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="newForm-body">
      <div className="newForm-nav">
        <div className="newForm-nav-menu">
          {user && <Dropdown name={user.userName} />}
        </div>
      </div>
      <div className="newForm-subBody">
        <div style={{ width: "80%" }}>
          <div className="newForm-folderDiv">
            <button className="create-folder-btn" onClick={handleCreateFolder}>
              Create a Folder
            </button>
            {Array.isArray(folders) &&
              folders.map((folder) => (
                <div key={folder._id} onClick={() => setFolderID(folder._id)}>
                  <FolderIcon
                    folderID={folder._id}
                    namee={folder.name}
                    setFolderSelected={setFolderSelected}
                    deleteFolder={deleteFolder}
                    isSelected={selectedFolderID === folder._id}
                  />
                </div>
              ))}
          </div>
          <div className="newForm-div">
            <div
              className={
                folderSelected ? "create-form" : "create-form-inactive"
              }
              onClick={folderSelected ? handleCreateTypebot : undefined}
            >
              <p style={{ fontWeight: "bold", fontSize: "large" }}>+</p>
              <p>Create a typebot</p>
            </div>
            {forms.map((form) => (
              <div
                className="newForm"
                key={form._id}
                onClick={() => {
                  redirectTOFormPage(form._id);
                }}
              >
                <div
                  className="formDeleteDiv"
                  onClick={(e) => {
                    handleFormDelete(form._id, e);
                  }}
                >
                  <img
                    className="formDeleteBin"
                    src={Delete}
                    alt="deleteIcon"
                  />
                </div>
                <p>New Form</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {createFolderPopup && (
        <CreateFolderPopup
          handlePopup={setCreateFolderPopup}
          userID={user._id}
          addNewFolder={addNewFolder}
        />
      )}
    </div>
  );
};

export default CreateNewForm;
