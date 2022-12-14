const Buttons = ({ setUrl, next, preview }) => {

    return (

        <div className="buttons">
            <button onClick={() => setUrl(preview)} className="button-back">Back</button>
            <button onClick={() => setUrl(next)} className="button-next">Next</button>
        </div>
    );
};
export default Buttons;
