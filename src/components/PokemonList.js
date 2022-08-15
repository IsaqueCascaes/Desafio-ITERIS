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
        <h1>Pokemons</h1>
        {NomePokemons.map(NomePokemons => {
          return (
            <div onClick= {()=>{urlDetails(NomePokemons.url)}}>
              <span>{NomePokemons.name}</span>
            </div>

          )
        })}
      </div>

{/* 2 */}
      <Buttons setUrl={setUrl} next={controlUrl.next} preview={controlUrl.preview} />

    </div>
  )

}

export default PokemonList;