import "./ExpenseFilter.css";

const ExpenseFilter = ({ filteredYear, onGettingSelected }) => {
  const dropdownChangeHandler = (event) => {
    onGettingSelected(event.target.value);
  };

  const years_range = 10;
  const current_year = new Date().getFullYear().toString();
  const year_list = [];
  for (let i = 0; i <= 10; i++) year_list.push(current_year - 10 + i);

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div>Select by Year</div>
        <select value={filteredYear} onChange={dropdownChangeHandler}>
          {year_list.reverse().map((e) => (
            <option value={e} key={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
