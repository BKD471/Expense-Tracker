import { useEffect, useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ title, amount, date }) => {
  const [text, setText] = useState(title);

  const clickHandler = () => {};

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{text}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={() => clickHandler()}>Click</button>
    </Card>
  );
};

export default ExpenseItem;
