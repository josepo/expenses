import { useState } from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onNew }) =>
{
   const [open, setOpen] = useState(false);

   return (
      <div className='new-expense'>
         { !open && 
            <button onClick={ () => { setOpen(true) }}>Add new expense</button> }

         { open &&
            <ExpenseForm onNew={ onNew } onCancel={ () => { setOpen(false); }} /> }
      </div>
   );
}

export default NewExpense;