import React from "react";

function TextSummary(props) {
  return (
    <>
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
        <h2>Text Summary</h2>
        <p>
          {props.input !== "" ? props.input.split(" ").length : 0} word and{" "}
          {props.input.length} character
        </p>
        <p>
          Expected :{" "}
          {props.input !== "" ? props.input.split(" ").length * 0.08 : 0} mins
          read
        </p>
        <h2>Preview</h2>
        <p>
          {props.input !== "Your Text Here !!"
            ? props.input
            : "Enter Some Text to Generate Preview !!"}
        </p>
      </div>
    </>
  );
}

export default TextSummary;
