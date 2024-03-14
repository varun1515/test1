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
  const [count, setCount] = useState(4);

  function changeCount(count) {
    setCount(prevCount => prevCount + count);
  }



  return (
    <>
      <h2>test</h2>
      <span>{count}</span>
      <button onClick={() => changeCount(1)}>+1</button>
      <button onClick={() => changeCount(-1)}>-1</button>
    </>
  )
}

export default App;
