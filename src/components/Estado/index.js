/*import { useState } from "react";

const Estado = () => {
    const [ nome, SetNome] = useState (["Thatto", ]);
    

    const handleClick = () => {
        SetNome("M4LV4D40");
        console.log(SetNome);
    }

    return (
        <div className="App">
            <h1>{nome}</h1>
            <input type="button" value="Mudar Nome" onClick={() => console.log(handleClick)}/>
        </div>
    )
}*/

export default Estado;

import {useState} from 'react';

const Estado = () => {
  const [nome1, setNome1] = useState(["joao", "andre", "hitalo"])
  const [index, setIndex] = useState(0)

  // let nome = "João Felipe";
 
  const handleClick = () => {
    // nome = "André"
      // setNome("André");
      if(index+1 >= nome1.length ) {
        setIndex(0)
        // return
      } else {
        setIndex(index+1)
        console.log(nome1)  
      }
  }

  return (
    <div>
      <h1>{nome1[index]}</h1>
      <input type="button" value="Mudar Nome" onClick={handleClick}/>
    </div>
  )
}

export default Estado


________________________________________________________________________________

import "./App.css"
import Propriedades from "./components/Propriedades";
// import Estado from "./components/Estado";

const App = () => {
  let nome = "João"

  return(
    <div className="App">
      {/* <Estado /> */}
      <Propriedades name={nome} idade={31} />
    </div>
  );
}

export default App;


________________________________________________________________________________

const Propriedades = () => {
    return(
        <>
            <h1>PROPRIEDADES</h1>
            <label >
                Nome:
                <input type="text" placeholder="Digite seu nome"/>
            </label>
        </>
    );
}

export default Propriedades
 


____________________________________________________________________

.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

----------------------------------------------------------------------------------------------------------------------------------

