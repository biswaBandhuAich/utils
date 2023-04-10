import { useState } from "react";
import React from "react";
import IncomeExpenseCard from "./IncomeExpenseCard";
import IncomeExpenseForm from "./IncomeExpenseForm";
import ExpenseList from "./ExpenseList";

function ExpenseTracker() {
  const [balance, setBalance] = useState(0.0);
  const [income, setIncome] = useState("0.00");
  const [expense, setExpense] = useState("0.00");
  const [trns, setTrns] = useState([]);

  const handleBalanceChange = (value, type, desc) => {
    if (type === "in") {
      setBalance(parseInt(balance) + parseInt(value));
      setIncome(parseFloat(income) + parseFloat(value));
    } else {
      setBalance(parseInt(balance) - parseInt(value));
      setExpense(parseFloat(expense) + parseFloat(value));
    }

    setTrns([
      {
        type: type,
        amount: value,
        desc: desc,
      },
      ...trns,
    ]);
  };

  return (
    <>
      <div className="container text-center my-2">
        <h2>Balance : &#x20B9; {balance}</h2>
      </div>
      <IncomeExpenseCard income={income} expense={expense} />
      <IncomeExpenseForm changeBalance={handleBalanceChange} />
      {trns.length !== 0 ? <ExpenseList transactionList={trns} /> : <></>}
    </>
  );
}

export default ExpenseTracker;
