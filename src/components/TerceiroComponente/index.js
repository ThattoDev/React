import './style.css';

const TerceiroComponente = () => {

    let num1;
    let num2;
    let soma;
    let result;
    
    const resultado = () => {
    soma = parseInt(num1) + parseInt(num2);
    result = Math.pow(soma, 2)
    console.log(result);
    }

    return (
        
        <container  className="App">
            <h1>Calculadora de exponenciação</h1>
            <label>Primeiro Número</label>
            <input type="number" value={num1} onChange={(e) => num1 = e.target.value} />
            <label>Segundo Número</label>
            <input type="number" value={num2} onChange={(e) => num2 = e.target.value}/>
            <button className="btn" onClick={resultado}>Resultado</button>  
        </container>
    )
}

export default TerceiroComponente;