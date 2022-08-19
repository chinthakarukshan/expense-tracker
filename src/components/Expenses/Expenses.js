import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.expenses;

    const filteredExpenses = expenses.filter((currentExpense) => {
        const year = currentExpense.date.getFullYear().toString();
        return year===filteredYear;
    });

    const changeDropDownValue = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    let expensesContent = <p>No Expenses Found</p>;

    if (filteredExpenses.length > 0 ) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ));
    }

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectedYear={filteredYear}
            onChangeDropdown={changeDropDownValue}
          />
          {expensesContent}
        </Card>
      </div>
    );
}

export default Expenses;