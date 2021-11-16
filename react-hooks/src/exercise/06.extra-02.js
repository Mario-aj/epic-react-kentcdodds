// useEffect: HTTP requests
import * as React from 'react'
import {
  fetchPokemon,
  PokemonForm,
  PokemonInfoFallback,
  PokemonDataView,
} from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [{status, error, pokemon}, setState] = React.useState({
    status: 'idle',
    error: null,
    pokemon: null,
  })

  React.useEffect(() => {
    if (!pokemonName) return null

    setState({status: 'pending'})
    fetchPokemon(pokemonName)
      .then(pokemonData => {
        setState({status: 'success', pokemon: pokemonData})
      })
      .catch(err => {
        setState({status: 'rejected', error: err.message})
      })
  }, [pokemonName])

  if (status === 'rejected')
    return (
      <div role="alert">
        There was an error: <pre style={{whiteSpace: 'normal'}}>{error}</pre>
      </div>
    )

  return (
    <>
      {status === 'idle' && 'Submit a pokemon'}
      {status === 'pending' && <PokemonInfoFallback name={pokemonName} />}
      {status === 'success' && <PokemonDataView pokemon={pokemon} />}
    </>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <PokemonInfo pokemonName={pokemonName} />
      </div>
    </div>
  )
}

export default App
