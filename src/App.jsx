import "./App.css";

import { useState } from "react";
import Expense from "./component/expenses/Expenses";
import NewExpense from "./component/new_expense/NewExpense";
import { EXPENSE_DATA } from "./util/Configs";

const App = () => {
  const [expenseList, setExpenseList] = useState(EXPENSE_DATA);

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
