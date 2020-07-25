import React, { useState } from 'react';

function Counter({startValue}) {

  const [ count, setCount ] = useState(startValue);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  )

}

export default Counter;