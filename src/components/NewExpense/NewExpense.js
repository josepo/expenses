import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onNew }) =>
{
   const onNewExpense = (expense) => 
   {
      onNew(expense);
   }

   return (
      <div className='new-expense'>
         <ExpenseForm onNew={ onNewExpense } />
      </div>
   );
}

export default NewExpense;