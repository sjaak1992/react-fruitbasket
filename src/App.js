import React from 'react';
import './App.css';
import {useForm} from "react-hook-form";

function App() {
    const {register, handleSubmit, errors, watch} = useForm();
    const gekozenAndereBezorging = watch('bezorging');


    const [counterAardbei, setCounterAardbei] = React.useState(0);
    const [counterBanaan, setCounterBanaan] = React.useState(0);
    const [counterAppel, setCounterAppel] = React.useState(0);
    const [counterKiwi, setCounterKiwi] = React.useState(0);


    function onSubmit(data) {
        // e.preventDefault();
        console.log(data)
    }

//deze functie vervangen met de react-hook-form, betekent e.preventDefault verwijderen, en onsubmit wrappen
//met handleSubmit {handleSubmit(onSumbit)} zie form attr. handleSubmit haalt ook data op en geeft weer in console


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


                <div className="container">
                    <h2 className="product-name">🍓 Aarbeien
                        <button type="button"
                                onClick={() => counterAardbei > 0 && setCounterAardbei(counterAardbei - 1)}
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


                <div className="container">
                    <h2 className="product-name"> 🍌 Bananen
                        <button type="button"
                                onClick={() => counterBanaan > 0 &&setCounterBanaan(counterBanaan - 1)}
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


                <div className="container">
                    <h2 className="product-name"> 🍏 Appels
                        <button type="button"
                                onClick={() => counterAppel > 0 && setCounterAppel(counterAppel - 1)}
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


                <div className="container">
                    <h2 className="product-name"> 🥝 Kiwi's
                        <button type="button"
                                onClick={() => counterKiwi > 0 && setCounterKiwi(counterKiwi - 1)}
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

            </main>

            <button
                className="container"
                type="reset"
                onClick={resetAll}>
                Reset
            </button>

            {/*Formulier met react hook */}

            <h3> Uw gegevens 👽 </h3>

            <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label>Voornaam:
                        <input ref={register({required: true})} type="text" name="voornaam"
                               placeholder="uw voornaam"/></label>

                    {errors.voornaam && <p>this input is requierd</p>}

                    <label> Achternaam:
                        <input ref={register({required: true})} type="text" name="achternaam"
                               placeholder="uw achternaam"/></label>

                    {errors.achternaam && <p>this input is requierd</p>}

                    <label>Leeftijd
                        <input ref={register({required: true, min: 18})} type="number" name="leeftijd"
                               placeholder="uw leeftijd"/></label>

                    {errors.leeftijd && <p>this input is requierd, min 18 years</p>}

                    <label>Postcode
                        <input ref={register({required: true})} type="number" name="postcode"
                               placeholder="uw postcode"/></label>

                    {errors.postcode && <p>this input is requierd</p>}

                    <label>Huisnummer
                        <input ref={register({required: true})} type="number" name="huisnummer"
                               placeholder="uw huisnummer"/></label>

                    {errors.huisnummer && <p>this input is requierd</p>}

                    <p>Bezorgfrequentie:</p>

                    <label htmlFor="field-elke-week">
                        <input ref={register({required: true})} type="radio" name="bezorging" id="field-elke-week"
                               value="elke-week"/>
                        Iedere week
                    </label>

                    <label htmlFor="field-om-de-week">
                        <input ref={register({required: true})} type="radio" name="bezorging" id="field-om-de-week"
                               value="om-de-week"/>
                        Om de week
                    </label>

                    <label htmlFor="field-elke-maand">
                        <input ref={register({required: true})} type="radio" name="bezorging" id="field-elke-maand"
                               value="elke-maand"/>
                        Elke maand
                    </label>

                    <label htmlFor="field-anders">
                        <input ref={register({required: true})}
                               type="radio"
                               name="bezorging"
                               id="field-anders"
                               value="anders"
                        />
                        Anders
                    </label>

                    {gekozenAndereBezorging === 'anders' && (
                        <input
                            type="text"
                            name="bezorging-anders"
                            ref={register({required: true})}
                        />
                    )}

                    {errors.bezorging && <p>please select one</p>}

                    {/*register is eig een functie, je kan hier allemaal properties aan meegeven (validatie)*/}

                    <label htmlFor="opmerkingen">Opmerkingen:</label>
                    <textarea
                        id="opmerkingen"
                        name="opmerkingen"
                        ref={register}
                        // onChange={(e) => setSelectComment(e.target.value)}
                    />


                    <label htmlFor="conditions">
                        <input
                            ref={register({required: true})}
                            id="conditions"
                            type="checkbox"
                            name="checkbox"

                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                    {errors.conditions && <p>Please agree with our terms and conditions</p>}

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
