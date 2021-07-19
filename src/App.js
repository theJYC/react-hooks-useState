import React, { useState } from "react"

function App() {
  //destructuring hook, into [value, f(x)]:
  //n.b. useState(0) returns an array with the value stored (i.e. count),
  //and the method to manipulate the value (i.e. setCount)
  const [count, setCount] = useState(0)

  function increment() {
    console.log(`${count} incremented to ${count + 1}`)
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    console.log(`${count} incremented to ${count - 1}`)
    setCount(prevCount => prevCount - 1)
  }

  function double() {
    setCount(prevCount => prevCount * 2)
  }

  function halve() {
    setCount(prevCount => prevCount / 2)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={double}>Double</button>
        <button onClick={halve}>Halve</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
