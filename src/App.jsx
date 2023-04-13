import "./App.css";
import Expense from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";

const App = () => {
  return (
    <>
      <NewExpense />
      <Expense />
    </>
  );
};

export default App;
