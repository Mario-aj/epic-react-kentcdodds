// useEffect: HTTP requests
import * as React from 'react'
import {
  fetchPokemon,
  PokemonForm,
  PokemonInfoFallback,
  PokemonDataView,
} from '../pokemon'

function PokemonInfo({pokemonName}) {
  const [pokemon, setPokemon] = React.useState(null)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    setError(null)
    setPokemon(null)
    if (!pokemonName) return null

    fetchPokemon(pokemonName)
      .then(pokemonData => setPokemon(pokemonData))
      .catch(err => setError(err.message))
  }, [pokemonName])

  if (error)
    return (
      <div role="alert">
        There was an error: <pre style={{whiteSpace: 'normal'}}>{error}</pre>
      </div>
    )

  return (
    <>
      {!pokemonName && !pokemon && 'Submit a pokemon'}
      {pokemonName && !pokemon && <PokemonInfoFallback name={pokemonName} />}
      {pokemon && <PokemonDataView pokemon={pokemon} />}
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
