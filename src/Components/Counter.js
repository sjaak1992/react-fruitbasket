import React from "react";

function Counter (props){
    return(
        <h2 className="product-name">{props.title}
            <button type="button"
                    onClick={() =>setCounterAardbei(counterAardbei - 1)}
            >
                -
            </button>

            {counterAardbei}

            <button type="button"
                    onClick={() =>setCounterAardbei(counterAardbei + 1)}
            >
                +
            </button>
        </h2>
    );
}

export default Counter;