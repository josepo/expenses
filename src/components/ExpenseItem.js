import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ date, title, amount })
{
   return (
      <div className='item'>
         <ExpenseDate date={ date } />
         <div className='item__title'>{ title }</div>
         <div className='item__price'>{ amount }</div>
      </div>
   );
}

export default ExpenseItem;