import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onNew, onCancel }) =>
{
   const [expense, setExpense] = useState({
      title: '',
      date: '',
      amount: ''
   });

   const setTitle = e =>
   {
      setExpense(prevState => ({ ...prevState, title: e.target.value })); 
   };

   const setDate = e => 
   {
      setExpense(prevState => ({ ...prevState, date: e.target.value }));
   };

   const setAmount = e =>
   {
      setExpense(prevState => ({ ...prevState, amount: e.target.value }));
   };

   const submit = e =>
   {
      e.preventDefault();

      onNew({
         ...expense,
         date: new Date(expense.date),
         id: Math.random().toString()
      });

      setExpense({ title: '', amount: '', date: '' });
   }

   return (
      <form onSubmit={ submit }>
         <div className='new-expense__controls'>
            <div className='new-expense__control'>
               <label>Title</label>
               <input value={ expense.title } onChange={ setTitle } />
            </div>
            <div className='new-expense__control'>
               <label>Amount</label>
               <input value={ expense.amount } type='number' min='0.01' step='0.01' onChange={ setAmount }/>
            </div>
            <div className='new-expense__control'>
               <label>Date</label>
               <input value={ expense.date } type='date' min='2019-01-01' max='2022-12-31'
                  onChange={ setDate } />
            </div>
         </div>
         <div className='new-expense__actions'>
            <button type='button' onClick={ onCancel }>Cancel</button>
            <button type='submit'>Add expense</button>
         </div>
      </form>
   );
}

export default ExpenseForm;