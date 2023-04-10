import React from "react";

function Alert(props) {
  return (
    <>
      {props.alertDispaly ? (
        <div class="alert alert-success" role="alert">
          {props.displayMessage}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Alert;
