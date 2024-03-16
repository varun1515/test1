import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(4);

  const [effectValue, seteffectValue] = useState(0);

  useEffect(() => {
    seteffectValue(count);
  },[count])

  function changeCount(count) {
    setCount(prevCount => prevCount + count);
  }



  return (
    <>
      <h2>test</h2>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+1</button>
      <button onClick={() => changeCount(-1)}>-1</button>
      <h3>{effectValue}</h3>
    </>
  )
}

export default App;
