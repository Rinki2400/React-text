import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleupClick = () => {
    console.log("function was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClick = () => {
    console.log("function was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    console.log("Clear text......");
    let newText = "";
    setText(newText);
  };
  const handleREmoveClick = () => {
    console.log("last word remove......");
    let newText = text.trim().split("");
    newText.pop();
    setText(newText.join(""));
  };
  const handleCapClick = () => {
    console.log("first letter captital......");
    let newText = text.trim().split("");
    newText[0] = newText[0].charAt(0).toUpperCase() + newText[0].slice(1);
    setText(newText.join(""));
  };
  const handleOnChange = (event) => {
    console.log("click on change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="containern mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}white value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn-primary mx-2 mt-3" onClick={handleupClick}>
          convert to UpperCase
        </button>
        <button className="btn-primary mx-3" onClick={handleClick}>
          convert to LowerCase
        </button>
        <button className="btn-primary mx-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn-primary mx-3" onClick={handleREmoveClick}>
          Remove
        </button>
        <button className="btn-primary mx-3" onClick={handleCapClick}>
          one letter captital
        </button>
      </div>
      <div className="conatiner my-3 mt-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} Words and {text.length} character
        </p>
        <p>{0.008 * text.split("").length}Minutes read</p>
        <h2>Priview summary</h2>
        <p>{text.length>0?text:"Enter Something  in the textbox above preview it here"}</p>
      </div>
    </>
  );
}
