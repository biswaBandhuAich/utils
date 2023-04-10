import React, { useState } from "react";

function IncomeExpenseForm(props) {
  const [type, setType] = useState("in");
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState(0);

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
    props.changeBalance(amount, type, desc);
  }
  function handleDescSubmit(event) {
    setDesc(event.target.value);
  }
  function handleDate() {}

  return (
    <>
      <div className="container mx-4">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <div className="input-group mb-3">
              <select
                className="form-select my-1"
                aria-label="Default select example"
                style={{ maxWidth: "18rem" }}
                onChange={handleType}
              >
                <option value="in" defaultValue>
                  Income
                </option>
                <option value="ex">Expenditure</option>
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <input
              style={{ maxWidth: "18rem" }}
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleDescSubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <input
              style={{ maxWidth: "18rem" }}
              type="date"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleDate}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <input
              style={{ maxWidth: "18rem" }}
              type="number"
              min="0.0"
              step="1"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleSheet}
            />
          </div>
        </div>
        <div className="col-md-1 my-1">
          <button className="btn btn-primary" onClick={handleAmountSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenseForm;
