import ExpenseItem from 'components/ExpenseItem';
import React from 'react';
import './ExpenseList.css';

const ExpenseList = (props) => {
  //this is a different way to manage the conditional content to have a cleaner jsx and is more readable
  // let expenseContent = <p>No expenses found</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list_fallback">Found no expenses.</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
