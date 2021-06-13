import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () =>
{
   const expenses = [
      { id: 0, title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
      { id: 1, title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      { id: 2, title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
      { id: 3, title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
   ];

   const add = expense =>
   {
      console.log('In App.js');
      console.log(expense);
   }

   return (
      <div className="App">
         <NewExpense onNew={ add }/>
         <Expenses items={ expenses } />
      </div>
   );
}

export default App;
