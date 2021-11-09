// useEffect: persistent state
import * as React from 'react'
import pkjson from '../../package.json'

function useLocalStorage(storageName = pkjson.name, initialName) {
  const [storageValue, setStorageValue] = React.useState(
    () => window.localStorage.getItem(storageName) || initialName,
  )

  React.useEffect(() => {
    window.localStorage.setItem(storageName, storageValue)
  }, [storageValue, storageName])

  return [storageValue, setStorageValue]
}

function Greeting({initialName = ''}) {
  const [name, setName] = useLocalStorage('name', initialName)

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
  return <Greeting initialName="Stefanio" />
}

export default App
