import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState(false)
  const inputRef = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    const value = inputRef.current?.value

    onSubmitUsername(value)
  }

  function handleChange(event) {
    const value = event.target.value
    const isValid = value === value.toLowerCase()

    setInputValue(value)
    setError(!isValid)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-text">Username:</label>
        <input
          ref={inputRef}
          id="input-text"
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {error && (
        <span role="alert" style={{color: 'red', fontSize: '12'}}>
          Username must be lower case
        </span>
      )}
      <button type="submit" disabled={error}>
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
