import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses({ items }) {
   return (
      <div className='expenses'>
      {
         items.map(i => 
            <ExpenseItem date={ i.date } title={ i.title } amount={ i.amount } />) 
      }
      </div>
   );
}

export default Expenses;