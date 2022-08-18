import React, {useState} from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const expenses = props.expenses;

    const changeDropDownValue = (selectedYear) => {
        setFilteredYear(selectedYear);
      };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selectedYear={filteredYear} onChangeDropdown={changeDropDownValue}/>
                {expenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    );
}

export default Expenses;