import React from "react";
import Bot from "../assets/bot.png";
import "../style/BotReply.css";
const BotReply = ({ label }) => {
  return (
    <>
      <div className="botReplyDiv">
        <div className="bot-avtar ">
          <img style={{ width: "100%" }} src={Bot} alt="bot" />
        </div>
        <div className="bot-text">{label}</div>
      </div>
    </>
  );
};

export default BotReply;
