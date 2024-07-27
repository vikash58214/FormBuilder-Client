import React from "react";
import Send from "../assets/send.png";
import "../style/UserReplySubmitted.css";
const UserReplySubitted = ({ userValue }) => {
  return (
    <>
      <div className="userReplyDiv">
        <div className="userValueSubmitted">{userValue}</div>
        <button className="replyButton-pre">
          <img style={{ width: "20px" }} src={Send} alt="send" />
        </button>
      </div>
    </>
  );
};

export default UserReplySubitted;
