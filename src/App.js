import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(4)

  function changeCount(amount) {
    setCount(prevCount => prevCount + amount)
  }

  function resetCount() {
    setCount(0)
  }

  return (
    <>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+</button>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => resetCount()}>Reset</button>
    </>
  )
}

export default App;
