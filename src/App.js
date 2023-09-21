import logo from './logo.svg';
import './App.css';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Header from './components/Header';
import Category from './components/Category';
import Items from './components/Items';

const sportingGoods = [
  {name:'Football', price: 49.99},
  {name:'Baseball', price: 9.99},
  {name:'Baskketball', price: 29.99}
]

function App() {
  return (
    <div className="App">
      <TextInput />
      <Checkbox/>
      <table>
        <Header/>
        <Category/>
        <Items items = {sportingGoods} includePrice></Items>
      </table>

    </div>
  );
}

export default App;
