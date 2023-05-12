import { useEffect, useState } from 'react'
import './App.css'
import BasicCard from './components/BasicCard'

function App() {

  const [pokemones, setPokemones] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      setPokemones(data.results);
    }
    getData();
  }, [])

  return (
    <>
      <div>
        <h1>pokemones</h1>
        {
          pokemones.map(pokemon => {
            return (
              <div>
              <h2>{pokemon.name}</h2>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
