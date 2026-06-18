import React, { use, useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handelOnChange = (event) => {
    console.log("handleOnChange was clicked");
    setText(event.target.value);
  }
  const[text,setText]= useState("Enter the text here");

  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <label for="mybox" class="form-label"></label>
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase
      </button>
    </div>
  );
}
