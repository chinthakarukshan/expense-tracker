import React, {useState} from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

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

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selectedYear={filteredYear}
            onChangeDropdown={changeDropDownValue}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList expenses={filteredExpenses}/>
        </Card>
      </div>
    );
}

export default Expenses;