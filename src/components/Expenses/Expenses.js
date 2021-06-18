import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = ({ items }) =>
{
   const [year, setYear] = useState(new Date().getFullYear());

   return (
      <Card className='expenses'>
         <ExpensesFilter value={ year } onFilter={ year => setYear(parseInt(year)) } />
         <ExpensesList items={ items.filter(i => i.date.getFullYear() === year) } />
      </Card>
   );
}

export default Expenses;