// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function reducer(state, action) {
  if (typeof action === 'function') return action(state)

  return {...state, count: action.count}
}

function Counter({initialCount = 0, step = 1}) {
  const [state, setState] = React.useReducer(reducer, {count: initialCount})

  const increment = () =>
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
