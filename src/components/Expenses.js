import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses({ expenses }) {
   return (
      <div className='expenses'>
      {
         expenses.map(e => 
            <ExpenseItem date={ e.date } title={ e.title } amount={ e.amount } />) 
      }
      </div>
   );
}

export default Expenses;