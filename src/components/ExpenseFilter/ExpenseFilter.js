import React from 'react';
import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
  const handleFilterChange = (e) => {
    props.onFilterChange(e.target.value);
  };
  return (
    <div>
      <div className="expense-filter">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleFilterChange}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
