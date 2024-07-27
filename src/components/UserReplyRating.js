import React from "react";
import Send from "../assets/send.png";
import "../style/UserReplyRating.css";

const UserReplyRating = () => {
  return (
    <>
      <div className="userReplyDiv">
        <div className="rating">
          <button className="ratingButton">1</button>
          <button className="ratingButton">2</button>
          <button className="ratingButton">3</button>
          <button className="ratingButton">4</button>
          <button className="ratingButton">5</button>
        </div>
        <button className="replyButton">
          <img style={{ width: "20px" }} src={Send} alt="send" />
        </button>
      </div>
    </>
  );
};

export default UserReplyRating;
