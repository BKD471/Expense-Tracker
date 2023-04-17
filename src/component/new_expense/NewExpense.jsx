import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);

  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    //add the expense
    onAddExpense(expenseData);
    setShowForm(false);
  };

  const formHandler = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={formHandler}>Add Expense</button>}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={savedExpenseDataHandler}
          onCancelForm={closeForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
