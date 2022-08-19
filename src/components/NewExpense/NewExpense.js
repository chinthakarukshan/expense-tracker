import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {

    const [showAddNewExpenseForm, setShowAddNewExpenseForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(expenseData);
        setShowAddNewExpenseForm(false);
    };

    const showAddNewExpenseFormHandler = () => {
        setShowAddNewExpenseForm(true);
    }

    const hideAddNewExpenseFormHandler = () => {
        setShowAddNewExpenseForm(false);
    }

    return (
      <div className="new-expense">
        {!showAddNewExpenseForm && <button onClick={showAddNewExpenseFormHandler}>Add New Expense</button>}
        {showAddNewExpenseForm && (
          <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={hideAddNewExpenseFormHandler}/>
        )}
      </div>
    );
}

export default NewExpense;