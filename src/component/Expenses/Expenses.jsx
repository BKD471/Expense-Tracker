import ExpenseItem from "../Expenses/ExpenseItem";

import "./Expenses.css";
import Card from "../UI/Card";

const Expense = ({ expenseList }) => {
  return (
    <Card className="expenses">
      {expenseList.map((expense) => {
        return <ExpenseItem {...expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expense;
