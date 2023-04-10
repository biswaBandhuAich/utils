import React from "react";

function Pagination(props) {
  const numbers = Array.from({ length: props.pages }, (_, index) => index + 1);

  const newPage = (event) => {
    props.nextNews(event.target.value);
  };

  return (
    <div
      className="btn-toolbar text-center"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <div className="btn-group me-2" role="group" aria-label="First group">
        {numbers.map((number, index) => {
          return (
            <button
              key={number}
              type="button"
              className="btn btn-primary mx-1 my-4"
              onClick={newPage}
              value={number}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
