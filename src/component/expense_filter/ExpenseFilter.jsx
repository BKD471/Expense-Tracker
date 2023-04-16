import "./ExpenseFilter.css";

const ExpenseFilter = ({ filteredYear, onGettingSelected }) => {
  const dropdownChangeHandler = (event) => {
    onGettingSelected(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div>Select by Year</div>
        <select value={filteredYear} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
