const CardDetails = () => {
    return (

        <div className="CardDetails">
            <div className="content-pokemon">
                <img class="pokemon" src="https://pa1.narvii.com/6408/8f70cbd230e46497ba9834e492694347ce9c7b87_hq.gif" alt=""></img>
            </div>

            <div className="CardDetails-items">
                <h2>Charizard</h2>
                <p>Dark</p>
                <ul>
                    <li>HP - 999</li>
                    <li>MP - 999</li>
                    <li>POWER-ATACK - 212</li>
                    <li>MAGIC-ATACK - 255</li>
                </ul>
            </div>
        </div>

    )
}

export default CardDetails;