import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter/Counter.jsx';
import WallWrapper from './container/WallWrapper';


function App() {

  const [ imageCount, setCount ] = useState(1);

  return (
    <div className="App">
      <Counter count={imageCount} setCount={setCount}/>
      <h1>Counter: {imageCount}</h1>
      <WallWrapper imageCount={imageCount}/>
    </div>
  );
}

export default App;
