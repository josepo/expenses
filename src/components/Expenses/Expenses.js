import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = ({ items, year, onFilter }) =>
{
   return (
      <Card className='expenses'>
         <ExpensesFilter value={ year } onFilter={ year => onFilter(parseInt(year)) } />
         {
            items.map(i => 
               <ExpenseItem key={ i.id } date={ i.date } title={ i.title } amount={ i.amount } />) 
         }
      </Card>
   );
}

export default Expenses;