import React, { useState } from "react";

export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  //   border: "1px solid white",
  // });
  let myStyle = {
    color : props.mode ==='dark' ? 'white' : "#042745",
    backgroundColor : props.mode ==='dark' ? 'rgb(36 74 104' :'white'
  }
  // const [btntext, setbtnText] = useState("Enable Dark Mode");
  // const toggleStyle = () => {
  //   if (myStyle.color === "white") {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtnText("Enable Dark Mode");
  //   } else {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: "1px solid white",
  //     });
  //     setbtnText("Enable Light Mode");
  //   }
  // };
  return (
    <>
      <div className="conatiner" >
        <h1 className="my-3" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>About US</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and
                efficently . Be it word count or Character count.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provides instant
                character count & word count statistics for a given text .
                TextUtils reports then umber of words and character . Thus it is
                suitable for writing text with word/ character limit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                style={myStyle}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browsers such as
                Chrome , FireFox , Internet Explorer , Safari , Opera . It suits
                to count charater in facebook , blogs , books ,excel document ,
                pdf document , pdf document ,essays , etc.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <button
            type="button"
            onClick={toggleStyle}
            className="btn btn-primary my-3"
          >
            {btntext}
          </button>
        </div> */}
      </div>
    </>
  );
}
