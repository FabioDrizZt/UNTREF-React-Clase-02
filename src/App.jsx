import './styles/App.css'
import TrailerList from './components/TrailerList/TrailerList'
import dataTrailers from './data/trailerflix.json'

function App() {
  return (
   <main className='App'>
    <h1>TrailerFlix!</h1>
    <TrailerList items={dataTrailers}/>
   </main>
  )
}

export default App
