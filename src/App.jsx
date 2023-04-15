import "./App.css";
import Expense from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import { expenseData } from "../src/util/ExpenseData";

const App = () => {
  const addExpenseItemHandler = (data) => {
    expenseData.push(data);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseItemHandler} />
      <Expense expenseList={expenseData} />
    </>
  );
};

export default App;
