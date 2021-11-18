// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function reducer(state, action) {
  return state + action
}

function Counter({initialCount = 0, step = 1}) {
  const [count, changeCount] = React.useReducer(reducer, initialCount)

  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
