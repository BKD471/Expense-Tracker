import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../expense_filter/ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expense = ({ savedExpenseList }) => {
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  const selectInputHandler = (value) => {
    setFilteredYear(value);
  };

  const filteredList = savedExpenseList.filter(
    (e) => e.date.getFullYear().toString() === filteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={filteredYear}
        onGettingSelected={selectInputHandler}
      />
      <ExpensesList filteredList={filteredList} />
    </Card>
  );
};

export default Expense;
