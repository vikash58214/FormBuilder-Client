import React, { useState, useEffect } from "react";
import BotReply from "../components/BotReply";
import Send from "../assets/send.png";
import UserReplySubmitted from "../components/UserReplySubmitted";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../style/FormBot.css";

const FormBot = () => {
  const [step, setStep] = useState(0);
  const [responseID, setResponseID] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [conversation, setConversation] = useState([]);
  const [showField, setShowField] = useState(false);
  const [data, setData] = useState({ fields: [] });
  const { formID } = useParams();

  const fetchFormStructure = async () => {
    try {
      const response = await axios.get(
        `https://formbuilder-backend-1.onrender.com/api/formfields/${formID}`
      );
      if (response.data && response.data.fields) {
        setData(response.data);
      } else {
        console.error("Unexpected data structure:", response.data);
      }
    } catch (error) {
      console.error("Error fetching form structure:", error);
    }
  };

  useEffect(() => {
    fetchFormStructure();
  }, [formID]);

  useEffect(() => {
    if (data.fields.length > 0 && step < data.fields.length) {
      if (data.fields[step].value === "Plaintext") {
        const timer = setTimeout(() => {
          setConversation((prev) => [
            ...prev,
            { label: data.fields[step].content, value: null },
          ]);
          setStep((prev) => prev + 1);
          setShowField(false);
        }, 2000);
        return () => clearTimeout(timer);
      } else {
        setShowField(true);
      }
    }
  }, [step, data.fields]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newConversation = conversation.map((entry, index) =>
        index === conversation.length - 1
          ? { ...entry, value: inputValue }
          : entry
      );

      setConversation(newConversation);
      setInputValue("");
      setShowField(false);

      try {
        const response = await axios.post(
          "https://formbuilder-backend-1.onrender.com/formresponses",
          {
            formID,
            responseID,
            responses: newConversation,
          }
        );
        if (!responseID) {
          setResponseID(response.data._id);
        }
        setStep(step + 1);
      } catch (error) {
        console.error("Error saving response:", error);
      }
    }
  };

  const renderField = (field, index) => {
    if (field.value === "Plaintext") {
      return <BotReply key={index} label={field.content} />;
    } else {
      return (
        <div className="userReplyDiv" key={index}>
          <form onSubmit={handleSubmit}>
            <div className="userReplyInputDiv">
              <input
                className="userReplyInput"
                type={field.value}
                value={inputValue}
                onChange={handleInputChange}
                required
              />
              <button className="replyButton" type="submit">
                <img style={{ width: "20px" }} src={Send} alt="send" />
              </button>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <>
      <div className="formBot-body">
        <div className="formBot-subBody">
          {conversation.map((item, index) => (
            <div key={index} className="conversation-item">
              <BotReply label={item.label} />
              {item.value && <UserReplySubmitted userValue={item.value} />}
            </div>
          ))}
          {step < data.fields.length &&
            showField &&
            renderField(data.fields[step], step)}
        </div>
      </div>
    </>
  );
};

export default FormBot;
