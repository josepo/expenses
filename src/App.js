import './App.css';
import Item from './components/Item';

function App() {
   const expenses = [
      { title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14) },
      { title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
      { title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28) },
      { title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12) }
   ];

   return (
      <div className="App">
         <Item date={ expenses[0].date } title={ expenses[0].title } amount={ expenses[0].amount }/>
         <Item date={ expenses[1].date } title={ expenses[1].title } amount={ expenses[1].amount }/>
         <Item date={ expenses[2].date } title={ expenses[2].title } amount={ expenses[2].amount }/>
         <Item date={ expenses[3].date } title={ expenses[3].title } amount={ expenses[3].amount }/>
      </div>
   );
}

export default App;
