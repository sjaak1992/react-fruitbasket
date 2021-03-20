import React from 'react';
import './App.css';
import {useform} from 'react-hook-form';

function App() {
    const {register, handleSubmit} = useform();

    const [counterAardbei, setCounterAardbei] = React.useState(0);
    const [counterBanaan, setCounterBanaan] = React.useState(0);
    const [counterAppel, setCounterAppel] = React.useState(0);
    const [counterKiwi, setCounterKiwi] = React.useState(0);
    const [selectComment, setSelectComment] = React.useState('');
    const [selectCheckbox, setSelectCheckbox] = React.useState(false);

    function onSubmit(e) {
        // e.preventDefault();
        console.log("jij wilt het formulier verzenden")
    }

    //deze functie vervangen met de react-hook-form, betekent e.preventDefault verwijderen, en onsubmit wrappen
    //met handleSubmit {handleSubmit(onSumbit)} zie form



    function resetAll() {
        setCounterKiwi(0);
        setCounterAardbei(0);
        setCounterBanaan(0);
        setCounterAppel(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>

            <main>
                <fieldset>

                    <div className="container">
                        <h2 className="product-name">Aarbeien
                            <button type="button"
                                    onClick={() => setCounterAardbei(counterAardbei - 1)}
                            >
                                -
                            </button>

                            {counterAardbei}

                            <button type="button"
                                    onClick={() => setCounterAardbei(counterAardbei + 1)}
                            >
                                +
                            </button>
                        </h2>
                    </div>
                </fieldset>


                <fieldset>
                    <div className="container">
                        <h2 className="product-name">Bananen
                            <button type="button"
                                    onClick={() => setCounterBanaan(counterBanaan - 1)}
                            >
                                -
                            </button>
                            {counterBanaan}
                            <button type="button"
                                    onClick={() => setCounterBanaan(counterBanaan + 1)}
                            >
                                +
                            </button>
                        </h2>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="container">
                        <h2 className="product-name">Appels
                            <button type="button"
                                    onClick={() => setCounterAppel(counterAppel - 1)}
                            >
                                -
                            </button>
                            {counterAppel}
                            <button type="button"
                                    onClick={() => setCounterAppel(counterAppel + 1)}
                            >
                                +
                            </button>
                        </h2>
                    </div>
                </fieldset>

                <fieldset>
                    <div className="container">
                        <h2 className="product-name">Kiwi's
                            <button type="button"
                                    onClick={() => setCounterKiwi(counterKiwi - 1)}
                            >
                                -
                            </button>
                            {counterKiwi}
                            <button type="button"
                                    onClick={() => setCounterKiwi(counterKiwi + 1)}
                            >
                                +
                            </button>
                        </h2>
                    </div>
                </fieldset>


            </main>


            <div className="button"/>

            <button
                id="reset"
                type="reset"
                onClick={resetAll}>
                Reset
            </button>

            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Voornaam:
                    <input type="text" name="voornaam" placeholder="uw voornaam"/></label>
                    <label> Achternaam:
                    <input type="text" name="achternaam" placeholder="uw achternaam"/></label>
                    <label>Leeftijd
                    <input type="number" name="leeftijd" placeholder="uw leeftijd"/></label>
                    <label>Anders
                    <input type="number" name="postcode" placeholder="uw postcode"/></label>

                    <p>Bezorgfrequentie:</p>

                    <label htmlFor="field-elke-week">
                    <input type="radio" name="bezorging" id="field-elke-week"/>
                        Iedere week
                    </label>

                    <label htmlFor="field-om-de-week">
                    <input type="radio" name="bezorging" id="field-om-de-week"/>
                        Om de week
                    </label>

                    <label htmlFor="field-elke-maand">
                        <input type="radio" name="bezorging" id="field-elke-maand"/>
                        Elke maand
                    </label>

                    <label htmlFor="field-anders">
                    <input type="radio" name="bezorging" id="field-anders"/>
                        Anders
                    </label>



                    <label htmlFor="opmerkingen">Opmerkingen:</label>
                        <textarea
                            id="opmerkingen"
                            name="opmerkingen"
                            value={selectComment}
                            onChange={(e) => setSelectComment(e.target.value)}
                        />



                    <label htmlFor="terms-and-conditions">
                        <input
                        type="checkbox"
                        id="terms-and-conditions"
                        name="terms-and-conditions"
                        checked={selectCheckbox}
                        onChange={() => setSelectCheckbox(!selectCheckbox)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                    <button
                        type="submit"
                        name="send"
                    >
                        Verzenden
                    </button>


                </form>
            </div>

        </>
    );

}


export default App;
