import './App.css';
<<<<<<< HEAD
import { useState } from 'react';
import CardDetails from './components/CardDetails';
import Titulo from './components/Titulo';
import PokemonList from './components/PokemonList';

function App() {

  //1
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=15')
  const [urlDetails, setUrlDetails] = useState(null)

=======
import CardDetails from './components/CardDetails';
import CardMenu from './components/CardMenu';
import Titulo from './components/Titulo';
import Buttons from './components/Buttons';

function App() {
>>>>>>> 886ffe562dd4dc289bf5a8638961355784f56494
  return (

    <div className="App">
      <Titulo />
<<<<<<< HEAD

      <div className="Cards">
        <PokemonList url={url} setUrl={setUrl} urlDetails={setUrlDetails} />
        <CardDetails urlDetails={urlDetails} />
      </div>
    </div>
  )
}
=======
      <div className="Cards">
        <CardMenu />
        <CardDetails />
      </div>
      <Buttons />
    </div>
  );
}

>>>>>>> 886ffe562dd4dc289bf5a8638961355784f56494
export default App;
