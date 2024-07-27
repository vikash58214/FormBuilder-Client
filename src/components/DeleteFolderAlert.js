import React from "react";
const DeleteFolderAlert = ({ setDeletePopup, handleFolderDelete }) => {
  return (
    <>
      <div className="popup-body">
        <div className="popup-subBody">
          <h3
            style={{
              marginBottom: "15px",
              color: "white",
              textAlign: "center",
            }}
          >
            Are you sure you want to delete this folder?
          </h3>
          <button className="popup-done-btn" onClick={handleFolderDelete}>
            Confirm
          </button>
          <button
            className="popup-cancel-btn"
            onClick={() => setDeletePopup(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteFolderAlert;
