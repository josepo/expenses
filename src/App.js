import logo from './logo.svg';
import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Expenses Manager <br />
          <Item />
          <Item />
          <Item />
        </p>
      </header>
    </div>
  );
}

export default App;
