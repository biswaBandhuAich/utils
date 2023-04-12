import React, { useState } from "react";
import "./ExpenseTracker.css";

function IncomeExpenseForm(props) {
  const [type, setType] = useState("in");
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState(0);
  const [date, setdate] = useState();

  function handleSheet(event) {
    setAmount(event.target.value);
  }

  function handleType(event) {
    if (event.target.value === "in") {
      setType("in");
    } else {
      setType("ex");
    }
  }

  function handleAmountSubmit() {
    props.alert("Transaction Added !!");
    props.changeBalance(amount, type, desc, date);
  }
  function handleDescSubmit(event) {
    setDesc(event.target.value);
  }
  function handleDate(event) {
    setdate(event.target.value.toString());
  }

  return (
    <div className="container text-center">
      <h3
        style={
          props.mode === "dark"
            ? {
                color: "white",
              }
            : {
                color: "black",
              }
        }
        className="my-3"
      >
        Ledger Input
      </h3>
      <div className="centerLedgerForm">
        <div className="form-floating my-2">
          <select
            onChange={handleType}
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            required
          >
            <option value="in">Income</option>
            <option value="ex">Expense</option>
          </select>
          <label for="floatingSelect">Type of Transaction</label>
        </div>
        <div class="form-floating my-2">
          <input
            required
            type="text"
            class="form-control"
            id="floatingInputGrid"
            placeholder="Description"
            onChange={handleDescSubmit}
          />
          <label for="floatingInputGrid">Description</label>
        </div>
        <div class="form-floating my-2">
          <input
            required
            type="number"
            class="form-control"
            id="floatingInputGrid1"
            placeholder="Amount"
            min="0"
            step="1"
            onChange={handleSheet}
          />
          <label for="floatingInputGrid1">Amount</label>
        </div>
        <div class="form-floating my-2">
          <input
            required
            type="date"
            class="form-control"
            id="floatingInputGrid2"
            onChange={handleDate}
          />
          <label for="floatingInputGrid2">Date</label>
        </div>
        <div class="form-floating my-4" style={{ maxWidth: "25rem" }}>
          <button
            class="btn btn-primary"
            type="submit"
            onClick={handleAmountSubmit}
          >
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomeExpenseForm;
