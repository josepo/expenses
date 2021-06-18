import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ items }) =>
{
   if (items.length === 0)
      return <h2 className="expenses-list__fallback">No expenses found.</h2>;

   return (
      <ul className='expenses-list'>
      { 
         items.map(i => 
            <ExpenseItem key={ i.id } date={ i.date } title={ i.title } amount={ i.amount } />)
      }
      </ul>
   );
}

export default ExpensesList;