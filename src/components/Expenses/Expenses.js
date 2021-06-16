import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = ({ items }) =>
{
   const [year, setYear] = useState(new Date().getFullYear());

   return (
      <Card className='expenses'>
         <ExpensesFilter value={ year } onFilter={ year => setYear(parseInt(year)) } />
         {
            items
               .filter(i => i.date.getFullYear() === year)
               .map(i => 
                  <ExpenseItem 
                     key={ i.id }
                     date={ i.date }
                     title={ i.title }
                     amount={ i.amount } />
               ) 
         }
      </Card>
   );
}

export default Expenses;