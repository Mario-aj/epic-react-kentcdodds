// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

const CountContext = React.createContext({
  count: 0,
  setCount: () => {},
})

const CountProvider = ({children, initialCount = 0}) => {
  const [count, setCount] = React.useState(initialCount)

  return (
    <CountContext.Provider value={{count, setCount}}>
      {children}
    </CountContext.Provider>
  )
}

function CountDisplay() {
  const {count} = React.useContext(CountContext)
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const {setCount} = React.useContext(CountContext)

  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider initialCount={0}>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
