import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [form, setForm] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // });
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value);
    // setForm((prevState) => {
    //   return { ...prevState, title: e.target.value };
    // });
  };

  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value);
    // setForm((prevState) => {
    //   return { ...prevState, amount: e.target.value };
    // });
  };

  const handleDateChange = (e) => {
    setEnteredDate(e.target.value);
    // setForm((prevState) => {
    //   return { ...prevState, date: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    // setForm({
    //   title: '',
    //   amount: '',
    //   date: '',
    // });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={handleTitleChange}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-01-01"
            value={enteredDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button
          className="new-expense_button"
          type="button"
          onClick={props.onStopEditing}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
