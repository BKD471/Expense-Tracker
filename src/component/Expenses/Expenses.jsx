import ExpenseItem from "../Expenses/ExpenseItem";

import "./Expenses.css";
import Card from "../UI/Card";

const Expense = ({ savedExpenseList }) => {
  return (
    <Card className="expenses">
      {savedExpenseList.map((expense) => {
        return <ExpenseItem {...expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expense;
