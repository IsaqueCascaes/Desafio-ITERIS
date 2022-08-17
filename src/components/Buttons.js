<<<<<<< HEAD
const Buttons = ({setUrl, next, preview}) => {

    return (

    <div className="buttons">
        {/* 3 */}
        <button onClick={()=>setUrl(preview)} className="button-back">Back</button>
        <button onClick={()=>setUrl(next)} className="button-next">Next</button>
    </div>
    );
};
export default Buttons;
//
=======
const Buttons = () => {
    return (
    <div className="buttons">
        <button className="button-back">Back</button>
        <button className="button-next">Next</button>
    </div>
    )
}

export default Buttons;
>>>>>>> 886ffe562dd4dc289bf5a8638961355784f56494
