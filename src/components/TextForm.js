import React, { use, useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const clear = () => {
    console.log("handleclsClick  was clicked" + text);
    let newText = '';
    setText(newText);
  }
    
  const handleLoClick = () => {
    console.log("Lowercase  was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handelOnChange = (event) => {
    console.log("handleOnChange was clicked");
    setText(event.target.value);
  }
  const[text,setText]= useState("");

  return (
    <>
    <div className="container">
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
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={clear}>
       clear the text
      </button>
    </div>
    
    <div className="container my-3">
      <h2>Summery</h2>
      <p>{text.split(" ").length} words and {text.length}characters </p>
      <p>{0.008 * text.split(" ").length}Minutes to read  </p>
      < h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
