import React from "react";

function ExpenseList(props) {
  return (
    <div className="container text-center">
      <h3
        className="my-4"
        style={
          props.mode === "dark"
            ? {
                color: "white",
              }
            : {
                color: "black",
              }
        }
      >
        Transactions
      </h3>
      <table className="table table-success text-center">
        <thead>
          <tr className="table-dark">
            <th>Type</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {props.transactionList.map((trans) => {
            return (
              <tr>
                <td
                  className={
                    trans.type === "in" ? "table-sucess" : "table-danger"
                  }
                >
                  {trans.type === "in" ? "Credited" : "Debited"}
                </td>
                <td
                  className={
                    trans.type === "in" ? "table-sucess" : "table-danger"
                  }
                >
                  {trans.desc}
                </td>
                <td
                  className={
                    trans.type === "in" ? "table-sucess" : "table-danger"
                  }
                >
                  {trans.date}
                </td>
                <td
                  className={
                    trans.type === "in" ? "table-sucess" : "table-danger"
                  }
                >
                  {trans.amount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseList;
