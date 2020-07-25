import React from 'react';
import './App.css';
import Counter from './components/counter/Counter.jsx';

function App() {
  return (
    <div className="App">
      <Counter startValue={5} />
    </div>
  );
}

export default App;
