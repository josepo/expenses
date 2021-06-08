import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = ({ items }) =>
{
   return (
      <Card className='expenses'>
      {
         items.map(i => 
            <ExpenseItem date={ i.date } title={ i.title } amount={ i.amount } />) 
      }
      </Card>
   );
}

export default Expenses;