import React from "react";

function Alert(props) {
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      {props.alertDispaly ? (
        <div class="alert alert-success text-center" role="alert">
          {props.displayMessage}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Alert;
