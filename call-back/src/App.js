import React, {useState, useCallback} from 'react';
import './App.css';

const fnSet = new Set();

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => 
    setCount(count =>count + 1)
  ,[])


  const decrement = useCallback(() => 
    setCount(count =>count - 1)
, [])

  fnSet.add(increment);
  fnSet.add(decrement);

  console.log(fnSet);
  
  return (
    <div className="App">
     <span>{count}</span>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
