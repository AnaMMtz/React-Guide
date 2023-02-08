import Card from 'components/Card';
import ExpenseFilter from 'components/ExpenseFilter';
import ExpenseItem from 'components/ExpenseItem';
import ExpenseList from 'components/ExpenseList';
import ExpensesChart from 'components/ExpensesChart.';
import React, { useState } from 'react';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    // console.log('Expens es.js');
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  // //this is a different way to manage the conditional content to have a cleaner jsx and is more readable
  // let expenseContent = <p>No expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
      {/* {expenseContent} */}
      {/* {This is a differente say to manage the conditional content, using 2 conditions} */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found!</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}
    </Card>
  );
};

export default Expenses;
