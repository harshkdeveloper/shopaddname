import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';
import DisplayShopname from './components/DisplayShopname';
import './css/main.css'

function App() {
  return (
    <div className="App">
      <h1>Shop list name</h1>
    <Shop/>
    <DisplayShopname/>
    </div>
  );
}

export default App;
