import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(21, 2, 2021);
  const expenseTitle = `Car Insurance`;
  const expensePrice = `$2578.9`;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
