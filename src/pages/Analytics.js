import React, { useEffect, useState } from "react";
import FileNav from "../components/FileNav";
import "../style/Analytics.css";
import { useParams } from "react-router-dom";
import axios from "axios";
// import axios from "axios";
const Analytics = () => {
  const [formsData, setFormsData] = useState([]);
  const [formDataa, setFormDataa] = useState("");
  const [count, setCount] = useState(0);
  const { formID } = useParams();
  const fetchFormResponses = async () => {
    try {
      if (formID) {
        const response = await axios.get(
          `https://formbuilder-backend-1.onrender.com/getFormResponse/${formID}`
        );
        if (response && response.data) setFormDataa(response.data);
        setFormsData(response.data[0].responses);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFormResponses();
  }, [formID]);

  const fetchFormData = async () => {
    try {
      const response = await axios.get(
        `https://formbuilder-backend-1.onrender.com/api/formfields/${formID}`
      );
      if (response && response.data) {
        setCount(response.data.clickCount);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchFormData();
  }, []);

  return (
    <>
      <FileNav formID={formID} />
      <div className="analytics-body">
        <div className="analytics-subBody">
          <div className="overview-body">
            <div className="overview">
              <h3 style={{ textAlign: "center" }}>Views</h3>
              <p style={{ textAlign: "center", fontSize: "larger" }}>{count}</p>
            </div>
            <div className="overview">
              <h3 style={{ textAlign: "center" }}>Start</h3>
              <p style={{ textAlign: "center", fontSize: "larger" }}>1</p>
            </div>
            <div className="overview">
              <h3 style={{ textAlign: "center" }}>Completion rate</h3>
              <p style={{ textAlign: "center", fontSize: "larger" }}>100%</p>
            </div>
          </div>
          <div className="table-body">
            <table>
              <thead>
                <tr>
                  <td>Created At</td>
                  {formsData.map((form, indexs) => (
                    <td key={indexs}>{form.label}</td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.isArray(formDataa) &&
                  formDataa.map((formm, index) => (
                    <tr key={`row-${index}`}>
                      <td>
                        {new Date(formm.createdAt).toISOString().split("T")[0]}
                      </td>
                      {formm.responses.map((formmm, idx) => (
                        <td key={`response-${index}-${idx}`}>{formmm.value}</td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
