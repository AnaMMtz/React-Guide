import Card from 'components/Card';
import ExpenseDate from 'components/ExpenseDate';
import React, { useState } from 'react';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item_description">
          <h2>{title}</h2>
          <div className="expense-item_price">{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
