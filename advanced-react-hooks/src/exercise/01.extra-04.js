// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('before: ', {state, action})
      return {...state, count: state.count + action.step}
    default:
      throw new Error(`The type ${action.type} is not recognized.`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const initiaState = {count: initialCount}
  const [state, dispatch] = React.useReducer(reducer, initiaState)

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{state.count}</button>
}

function App() {
  return <Counter />
}

export default App
