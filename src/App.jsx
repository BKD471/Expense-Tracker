import "./App.css";

import { useState } from "react";
import Expense from "./component/expenses/Expenses";
import NewExpense from "./component/new_expense/NewExpense";
import { expenseData } from "../src/util/ExpenseData";

const App = () => {
  const [expenseList, setExpenseList] = useState(expenseData);

  const addExpenseItemHandler = (data) => {
    setExpenseList((prevState) => {
      return [data, ...prevState];
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
