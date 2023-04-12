import React from "react";
import "./ExpenseTracker.css";

function IncomeExpenseCard(props) {
  return (
    <div class="container my-4">
      <div class="row justify-content-center">
        <div class="col-md-6 text-center col-sm-12">
          <div className="card text-bg-success cardLeft">
            <div className="card-header">Income</div>
            <div className="card-body">
              <h5 className="card-title">&#x20B9; {props.income}</h5>
            </div>
          </div>
        </div>
        <div class="col-md-6 text-center col-sm-12">
          <div className="card text-bg-danger cardRight">
            <div className="card-header">Expense</div>
            <div className="card-body">
              <h5 className="card-title">&#x20B9; {props.expense}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseCard;
