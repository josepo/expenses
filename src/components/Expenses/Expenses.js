import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = ({ items }) =>
{
   const [year, setYear] = useState(new Date().getFullYear());
   const expenses = items.filter(i => i.date.getFullYear() === year);

   return (
      <Card className='expenses'>
         <ExpensesFilter value={ year } onFilter={ year => setYear(parseInt(year)) } />
         <ExpensesChart expenses={ expenses } />
         <ExpensesList items={ expenses } />
      </Card>
   );
}

export default Expenses;