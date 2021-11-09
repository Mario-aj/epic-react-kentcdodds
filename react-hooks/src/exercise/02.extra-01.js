// useEffect: persistent state
import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(() => someExpensiveComputation())

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

  function someExpensiveComputation() {
    return window.localStorage.getItem('name') || initialName
  }

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
