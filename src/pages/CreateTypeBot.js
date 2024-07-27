import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FileNav from "../components/FileNav";
import "../style/CreateTypeBot.css";
import { useNavigate } from "react-router-dom";

const CreateTypeBot = () => {
  const navigate = useNavigate();
  const [fields, setFields] = useState([]);
  const [input, setInput] = useState({});
  const [errors, setErrors] = useState({});
  const [shareBtn, setShareBtn] = useState(false);
  const [generatedLink, setGeneratedLink] = useState("");

  const { formID } = useParams();

  useEffect(() => {
    const fetchFormData = async () => {
      try {
        const response = await axios.get(
          `https://formbuilder-backend-1.onrender.com/api/formfields/${formID}`
        );
        if (response.data) {
          setFields(response.data.fields);
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
      }
    };
    fetchFormData();
  }, [formID]);

  const handleFields = (value) => {
    setFields([...fields, { value, id: fields.length }]);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    const newErrors = {};
    fields.forEach((field) => {
      if (
        ["botText", "image", "video", "gif"].includes(field.value) &&
        !input[field.id]
      ) {
        newErrors[field.id] = "This field is required";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const folderID = localStorage.getItem("folderID");

      if (!folderID) {
        console.error("FolderID is missing from local storage.");
        return;
      }

      const formData = {
        fields: fields.map((field) => ({
          value: ["botText", "gif", "video", "image"].includes(field.value)
            ? "Plaintext"
            : field.value,
          content: input[field.id] || "",
        })),
        folderID,
      };

      const response = await axios.post(
        "https://formbuilder-backend-1.onrender.com/api/forms",
        formData
      );
      if (response.data) {
        const newFormID = response.data._id;
        const link = `${window.location.origin}/form-bot/${newFormID}`;
        setGeneratedLink(link);
        setShareBtn(true);
      }
    } catch (error) {
      console.error("Error saving form:", error);
    }
  };

  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleShare = () => {
    if (generatedLink) {
      navigator.clipboard
        .writeText(generatedLink)
        .then(() => {
          alert("Link copied to clipboard!");
          navigate("/newForm");
        })
        .catch((err) => console.error("Could not copy text: ", err));
    }
  };

  const renderElement = (element) => {
    const isInputRequired = ["botText", "image", "video", "gif"].includes(
      element.value
    );
    return (
      <div className="text-field" key={element.id}>
        <div style={{ width: "100%", paddingLeft: "20px" }}>
          {element.value.charAt(0).toUpperCase() + element.value.slice(1)}
        </div>
        {isInputRequired && (
          <input
            className="text-field-input"
            placeholder="Click to add text"
            type="text"
            required
            onChange={(e) => handleChange(element.id, e.target.value)}
          />
        )}
        {errors[element.id] && (
          <div style={{ color: "red" }}>{errors[element.id]}</div>
        )}
        {[
          "text",
          "number",
          "email",
          "phone",
          "date",
          "rating",
          "text",
        ].includes(element.value) && (
          <h5 style={{ color: "gray" }}>Hint: User will input here</h5>
        )}
      </div>
    );
  };

  return (
    <>
      <FileNav
        handleSave={handleSave}
        saveBtn={fields.length > 0}
        shareBtn={shareBtn}
        handleShare={handleShare}
        formID={formID}
      />
      <div className="create-bot-body">
        <div className="createBot-leftNav">
          <div className="bubbles-body">
            <p style={{ fontSize: "20px", color: "white" }}>Bubbles</p>
            <div className="bubbles">
              <button
                onClick={() => handleFields("botText")}
                className="formFields"
              >
                Text
              </button>
              <button
                onClick={() => handleFields("image")}
                className="formFields"
              >
                Image
              </button>
              <button
                onClick={() => handleFields("video")}
                className="formFields"
              >
                Video
              </button>
              <button
                onClick={() => handleFields("gif")}
                className="formFields"
              >
                GIF
              </button>
            </div>
          </div>
          <div className="form-inputsBody">
            <p style={{ fontSize: "20px", color: "white" }}>Inputs</p>
            <div className="bubbles">
              <button
                onClick={() => handleFields("text")}
                className="formFields"
              >
                Text
              </button>
              <button
                onClick={() => handleFields("number")}
                className="formFields"
              >
                Number
              </button>
              <button
                onClick={() => handleFields("email")}
                className="formFields"
              >
                Email
              </button>
              <button
                onClick={() => handleFields("phone")}
                className="formFields"
              >
                Phone
              </button>
              <button
                onClick={() => handleFields("date")}
                className="formFields"
              >
                Date
              </button>
              <button
                onClick={() => handleFields("rating")}
                className="formFields"
              >
                Rating
              </button>
              <button
                onClick={() => handleFields("text")}
                className="formFields"
              >
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="formStructure-body">
          <div className="formStructure">
            <div className="formStructure-heading">Start</div>
            {fields.map((element) => renderElement(element))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTypeBot;
