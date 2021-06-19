import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onNew }) =>
{
   return (
      <div className='new-expense'>
         <ExpenseForm onNew={ onNew } />
      </div>
   );
}

export default NewExpense;