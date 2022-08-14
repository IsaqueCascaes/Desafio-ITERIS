import './App.css';
import CardDetails from './components/CardDetails';
import CardMenu from './components/CardMenu';
import Titulo from './components/Titulo';
import Buttons from './components/Buttons';

function App() {
  return (

    <div className="App">
      <Titulo />
      <div className="Cards">
        <CardMenu />
        <CardDetails />
      </div>
      <Buttons />
    </div>
  );
}

export default App;
