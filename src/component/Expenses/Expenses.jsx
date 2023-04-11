import ExpenseItem from "../Expenses/ExpenseItem";
import { expenseData } from "../../util/ExpenseData";

import "./Expenses.css";
import Card from "../UI/Card";

const Expense = () => {
  return (
    <Card className="expenses">
      {expenseData.map((expense) => {
        return <ExpenseItem {...expense} key={expense.id} />;
      })}
    </Card>
  );
};

export default Expense;
