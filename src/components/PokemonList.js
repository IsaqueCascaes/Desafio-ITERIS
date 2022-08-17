import { useState, useEffect } from "react";
import Buttons from "./Buttons";

const PokemonList = ({ url, setUrl, urlDetails }) => {
  const [controlUrl, setControlUrl] = useState({ next: '', preview: '' })

  const [NomePokemons, SetNomes] = useState([])

  useEffect(() => {


    const fetchData = async () => {
      const result = await fetch(url)
        .then(Response => Response.json())
        .then(data => (data))
      SetNomes(result.results)
      setControlUrl({ next: result.next, preview: result.previous })

    }
    fetchData()

  }, [url])



  return (
    <div className="CardMenu">
      <div className="CardMenu-items">
        <br></br><br></br>


        {NomePokemons.map(NomePokemons => {
          return (
            <div key={NomePokemons.url} onClick={() => { urlDetails(NomePokemons.url) }}>
              <ul>
                <li className="name-pokemons">{NomePokemons.name}</li>
              </ul>
            </div>

          )
        })}
      </div>


      <Buttons setUrl={setUrl} next={controlUrl.next} preview={controlUrl.preview} />

    </div>
  )

}

export default PokemonList;