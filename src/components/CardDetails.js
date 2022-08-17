import { type } from "@testing-library/user-event/dist/type";
import { useEffect, useState } from "react";


const CardDetails = ({ urlDetails }) => {

    const [detailsPokemons, setDetailsPokemons] = useState(null)
    const [isPikachu, setIsPikachu] = useState(false)

    useEffect(() => {
        const fetchDataDetails = async () => {
            const resultDetails = await fetch(urlDetails)
                .then(response => response.json())
                .then(data => (data))
            setDetailsPokemons(resultDetails)
            console.log(resultDetails)
        }

        fetchDataDetails()
    }, [urlDetails])

    useEffect(() => {
        if (
            detailsPokemons?.name === "pikachu") {
            setIsPikachu(true)
        } else {
            setIsPikachu(false)
        }
    }, [detailsPokemons])

    return (

        <div className={isPikachu === true ? "CardDetails details-pikachu" : "CardDetails"}>
            {detailsPokemons !== null && (
                <>

                    <div className="content-pokemon">
                        <img src={detailsPokemons.sprites.other['official-artwork'].front_default} alt=""></img>
                    </div>

                    <div className="CardDetails-items">
                        <h2 className="name">{detailsPokemons.id} - {detailsPokemons.name}</h2>
                        {detailsPokemons.types.map((type, i) => {
                            return (
                                <div className="types">
                                    <span key={i}>{type.type.name}</span>
                                </div>
                            )
                        })}
                        <p>state:</p>
                        {detailsPokemons.stats.map(
                            (stat, i) => {
                                return (
                                    <div className="container">
                                        <div className="progress-bar">
                                            <p key={i}> {stat.stat.name} - {stat.base_stat}</p>
                                        </div>
                                    </div>
                                )
                            })}

                    </div>
                </>
            )}
        </div>

    )
}

export default CardDetails;