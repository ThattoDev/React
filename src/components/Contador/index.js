import { useState } from "react";

const Contador = (props) => {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        setCount(count +1)
        // setCount((prevState) => prevState + 1) Podemos usar também dessa forma
    }
    return(
        <>
            <h1>Olá {props.meuNome}!</h1>
            <h1>Contador de clicks: {count}</h1>
            <button onClick={incrementar}>Click Aqui!!!</button>
        </>
    );
}

export default Contador;