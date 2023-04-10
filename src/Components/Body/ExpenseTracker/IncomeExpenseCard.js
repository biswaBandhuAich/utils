import React from "react";

function IncomeExpenseCard(props) {
  return (
    <div className="container my-2">
      <div className="row">
        <div
          className="card text-bg-success col-md-6 mx-2 mb-2"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header text-center">Income</div>
          <div className="card-body">
            <h5 className="card-title text-center">&#x20B9; {props.income}</h5>
            <p className="card-text"></p>
          </div>
        </div>
        <div
          className="card text-bg-danger col-md-6 mx-2 mb-2"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header text-center">Expense</div>
          <div className="card-body">
            <h5 className="card-title text-center">&#x20B9; {props.expense}</h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseCard;
