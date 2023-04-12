import React from "react";

function NewsItem(props) {
  return (
    <>
      <div
        className="card h-100"
        style={
          props.mode === "dark"
            ? {
                backgroundColor: "rgb(6 35 81)",
                color: "white",
                borderColor: "white",
              }
            : { color: "black" }
        }
      >
        <img
          src={props.image ? props.image : ""}
          className="card-img-top"
          alt="..."
          width="200"
          height="250"
        />
        <div className="card-body">
          <h5 className="card-title ">
            {props.title ? props.title.substr(0, 45) : ""}
          </h5>
          <p className="card-text">
            {props.description ? props.description.substr(0, 80) : ""}...
          </p>
          <a
            rel="noreferrer"
            href={props.url ? props.url : "/"}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read more
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
