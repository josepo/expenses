import './ExpenseDate.css';

function ExpenseDate({ date })
{
   return (
      <div className='item-date'>
         <div>{ date.toLocaleString('en-US', { month: 'long' }) }</div>
         <div>{ date.toLocaleString('en-US', { day: '2-digit' }) }</div>
         <div>{ date.getFullYear() }</div>
      </div>
   );
}

export default ExpenseDate;