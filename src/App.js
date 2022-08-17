import './App.css';
import { useState } from 'react';
import CardDetails from './components/CardDetails';
import Titulo from './components/Titulo';
import PokemonList from './components/PokemonList';

function App() {

  //1
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=15')
  const [urlDetails, setUrlDetails] = useState(null)

  return (

    <div className="App">
      <Titulo />

      <div className="Cards">
        <PokemonList url={url} setUrl={setUrl} urlDetails={setUrlDetails} />
        <CardDetails urlDetails={urlDetails} />
      </div>
    </div>
  )
}
export default App;
