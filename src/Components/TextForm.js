import React, { useState } from "react";

export default function TextForm(props) {
  // Declare a new state variable , which we'll call "count"
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase !" , "success");
  };
  const handleLorClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase !" , "success");
  };
  const ClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("TextArea Cleared !" , "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  //   text = "new text" // wrong way to change the state
  // setText("new text"); //correct way to change the state
  return (
    <>
      <div className="container" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="myBox"
            value={text}
            rows="8"
            style={{backgroundColor:props.mode === "dark" ? "darkgrey" : "white" ,
            color:props.mode ==='dark' ? "white" : 'black'
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLorClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={ClearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").filter((element)=>{
            return element.length!==0;
          }).length} words , {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{
            return element.length!==0;
          }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
