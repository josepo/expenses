import ExpenseItem from './ExpenseItem';

const ExpensesList = ({ items }) =>
{
   if (items.length === 0)
      return <p>No expenses found.</p>;

   return items.map(i => 
      <ExpenseItem key={ i.id } date={ i.date } title={ i.title } amount={ i.amount } />);
}

export default ExpensesList;