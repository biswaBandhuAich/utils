import React from "react";
import { useState } from "react";

function Pagination(props) {
  const [pageNumber, setPageNumber] = useState(1);
  const newPage = () => {
    setPageNumber(parseInt(pageNumber) + 1);
    props.nextNews(pageNumber);
  };

  return (
    <div
      className="btn-toolbar text-center"
      role="toolbar"
      aria-label="Toolbar with button groups"
    >
      <button
        type="button"
        className="btn btn-primary mx-1 my-4"
        onClick={newPage}
      >
        Previous
      </button>
      <button
        type="button"
        className="btn btn-primary mx-1 my-4"
        onClick={newPage}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
