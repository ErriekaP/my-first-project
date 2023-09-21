import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';


const sportingGoods = [
  {id:1, name:'Football', price: 49.99, stock: 0},
  {id:2,name:'Baseball', price: 9.99, stock: 1},
  {id:3,name:'Basketball', price: 29.99, stock: 2}
]

function App() {
  const[txtValue, setTextValue] = useState('')
  const [showOnlyStock, setShowOnlyStock] = useState(false)


  const handleClick = () => {
    alert('Clicked')
  }

  return (
    <div className="App">
      {txtValue}
      <TextInput value={txtValue} onChange={(e) => setTextValue(e.target.value) }/>

      <Checkbox checked={showOnlyStock} onChange={(e) => setShowOnlyStock(e.target.checked)}/>

      <button onClick={handleClick}>Submit</button>
      <table>
        <tbody>
        <Header/>
        <Category/>
        <Items items={sportingGoods} includePrice query={txtValue} showOnlyStock={showOnlyStock}></Items>
        </tbody>
      </table>

    </div>
  );
}

export default App;
