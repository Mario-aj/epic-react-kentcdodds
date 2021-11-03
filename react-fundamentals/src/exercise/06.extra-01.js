import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    const value = inputRef.current?.value

    onSubmitUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="input-text">Username:</label>
        <input ref={inputRef} id="input-text" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
