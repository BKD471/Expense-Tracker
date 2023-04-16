import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../expense_filter/ExpenseFilter";

const Expense = ({ savedExpenseList }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const selectInputHandler = (value) => {
    setFilteredYear(value);
  };

  return (
    <>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onGettingSelected={selectInputHandler}
        />
        {savedExpenseList.map((expense) => {
          return <ExpenseItem {...expense} key={expense.id} />;
        })}
      </Card>
    </>
  );
};

export default Expense;
