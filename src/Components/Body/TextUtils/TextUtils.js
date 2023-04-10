import React, { useState } from "react";
import TextSummary from "./TextSummary";

function TextUtils(props) {
  const [mainText, setMainText] = useState("Your Text Here !!");
  const [secondText, setSecondText] = useState("");
  const [disabledValue, setdisabledValue] = useState(true);

  function handleTextInput(event) {
    setMainText(event.target.value);
  }

  function handleClearText() {
    if (mainText !== "Your Text Here !!") {
      setSecondText(mainText);
      setMainText("Your Text Here !!");
      setdisabledValue(false);
      props.alert("Text has been cleared !!!");
    }
  }

  function handleUndoClearText() {
    setMainText(secondText);
    setdisabledValue(true);
  }

  function handleFocusText() {
    if (mainText === "Your Text Here !!") {
      setMainText("");
    }
  }

  function handleDeFocusText() {
    if (mainText === "") {
      setMainText("Your Text Here !!");
    }
  }

  function handleConvertUpperCase() {
    let textMain = mainText.toUpperCase();
    setMainText(textMain);
    props.alert("Text has been converted to uppercase !!!");
  }

  function handleConvertLowerCase() {
    let textMain = mainText.toLowerCase();
    setMainText(textMain);
    props.alert("Text has been converted to lowercase !!!");
  }

  function handleCopyText() {
    navigator.clipboard.writeText(mainText);
    props.alert("Text Copied !!!");
  }

  function removeExtraSpace() {
    let textMain = mainText.replace(/\s+/g, " ").trim();
    setMainText(textMain);
    props.alert("Extra Spaces Removed !!!");
  }

  return (
    <div
      style={{
        marginTop: "5%",
      }}
    >
      <div
        className="container text-center"
        style={
          props.mode === "dark"
            ? {
                color: "white",
              }
            : { color: "black" }
        }
      >
        <h2 className="my-3 text-left"> Enter Your Text Below</h2>
        <textarea
          padding="10px"
          className="textarea my-2"
          onChange={handleTextInput}
          onFocus={handleFocusText}
          onBlur={handleDeFocusText}
          value={mainText}
          style={
            props.mode === "dark"
              ? {
                  backgroundColor: "#103262",
                  color: "white",
                  height: "150px",
                  width: "70%",
                }
              : {
                  backgroundColor: "white",
                  color: "black",
                  height: "150px",
                  width: "70%",
                }
          }
        ></textarea>
      </div>
      <div className="container text-center my-3">
        <button
          className="btn btn-primary mx-2"
          onClick={handleConvertUpperCase}
        >
          Convert To Upper Case
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleConvertLowerCase}
        >
          Convert To Lower Case
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={removeExtraSpace}
        >
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleUndoClearText}
          disabled={disabledValue}
        >
          Undo Clear Text
        </button>
      </div>
      <TextSummary input={mainText} mode={props.mode} />
    </div>
  );
}

export default TextUtils;
