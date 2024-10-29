import './styles/App.css'
import TrailerList from './components/TrailerList/TrailerList'
import dataTrailers from './data/trailerflix.json'
import { useState } from 'react'

function App() {
  const [busqueda, setBusqueda] = useState('')
  
  return (
   <main className='App'>
    <h1>TrailerFlix!</h1>
    <input type="text" value={busqueda} onChange={(e)=>setBusqueda(e.target.value)}/>
    <TrailerList busqueda={busqueda} trailers={dataTrailers}>
      <p>Lista de Trailers</p>
      </TrailerList>
   </main>
  )
}

export default App
