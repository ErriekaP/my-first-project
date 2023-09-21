import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';


const sportingGoods = [
  {name:'Football', price: 49.99, stock: 0},
  {name:'Baseball', price: 9.99, stock: 1},
  {name:'Basketball', price: 29.99, stock: 2}
]

function App() {
  const[txtValue, setTextValue] = useState('Hey')

  const handleClick = () => {
    alert('Clicked')
  }
  return (
    <div className="App">
      {txtValue}
      <TextInput value={txtValue} onChange={(e) => setTextValue }/>
      <Checkbox/>
      <button onClick={handleClick}>Submit</button>
      <table>
        <Header/>
        <Category/>
        <Items items = {sportingGoods} includePrice></Items>
      </table>

    </div>
  );
}

export default App;
