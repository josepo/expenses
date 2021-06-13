import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

const Expenses = ({ items }) =>
{
   const [filteredYear, setFilteredYear] = useState('2020');

   const filter = year =>
   {
      setFilteredYear(year);
   };

   return (
      <div>
         <ExpensesFilter value={ filteredYear } onFilter={ filter } />
         <Card className='expenses'>
         {
            items.map(i => 
               <ExpenseItem key={ i.id } date={ i.date } title={ i.title } amount={ i.amount } />) 
         }
         </Card>
      </div>
   );
}

export default Expenses;