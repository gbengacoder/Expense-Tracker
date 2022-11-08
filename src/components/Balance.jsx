import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  if (!transactions) return;

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts.filter((mov) => mov > 0).reduce((a, b) => a + b, 0);

  const outcome = amounts.filter((mov) => mov < 0).reduce((a, b) => a + b, 0);

  const balance = income + outcome;

  return (
    <div>
      <div className="bal">
        <h2>Express tracker</h2>
        <div className="balAmount">
          <p>Your Balance</p>
          <h3>{balance}$</h3>
        </div>
      </div>

      <div className="income-outcome">
        <div className="income">
          <h2>Income</h2>
          <p>{income}$</p>
        </div>
        <div className="outcome">
          <h2>Expenses</h2>
          <p>{outcome}$</p>
        </div>
      </div>
    </div>
  );
};

export default Balance;
