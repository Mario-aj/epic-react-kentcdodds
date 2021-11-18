// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.step
    default:
      throw new Error()
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(reducer, initialCount)

  const increment = () => setCount({type: 'increment', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
