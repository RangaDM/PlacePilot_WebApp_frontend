import React, { useState } from "react";
import backimg from "../Assets/logic-back.svg"

const Logic = () => {
  const [inputValue, setInputValue] = useState("");
  const [err, setErr] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const search = () => {
    if (inputValue.trim() === "") {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
    } else {
      console.log(inputValue);
    }
  };

  return (
    <div className="work-section-wrapper">
      <div className="logic-background-image-container">
        <img src={backimg} alt="background" />
      </div>
      <div className="work-section-top">
        <p className="primary-subheading">Find Here</p>
        <h1 className="primary-heading">Just Search, We'll Sort !</h1>
        <p className="primary-text">
          Want a list of all Pizza Hut shops in your country? Search, and we'll
          sort it out for you, including key details. Easy finding, guaranteed.
        </p>
        {err && (
          <p style={{ color: "red", fontSize: "20px" }} className="error">
            Please enter a valid search term
          </p>
        )}
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="Pizza hut in Kandy"
            onChange={handleInputChange}
          />
          <button onClick={search} className="secondary-button">
            Submit
          </button>
        </div>
      </div>
      <div className="testimonial-section-bottom"></div>
    </div>
  );
};

export default Logic;
