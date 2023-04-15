import "./App.css";

import Expense from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import { expenseData } from "../src/util/ExpenseData";
import { useState } from "react";

const App = () => {
  const [expenseList, setExpenseList] = useState(expenseData);

  const addExpenseItemHandler = (data) => {
    setExpenseList((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseItemHandler} />
      <Expense savedExpenseList={expenseList} />
    </>
  );
};

export default App;
