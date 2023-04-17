import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filteredList }) => {
  if (filteredList.length === 0)
    return <h2 className="expenses-list__fallback">Found No expenses</h2>;

  return (
    <ul className="expenses-list">
      <li>
        {filteredList.map((expense) => {
          return <ExpenseItem {...expense} key={expense.id} />;
        })}
      </li>
    </ul>
  );
};

export default ExpensesList;
