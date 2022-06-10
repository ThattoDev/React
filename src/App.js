import './App.css';

import Contador from './components/Contador';
//import TerceiroComponente from './components/TerceiroComponente';
//import Estado from "./components/Estado";

const App =() => {
  let nome = "Thatto"

  return (
    <div className='App'>
    
      <Contador meuNome={nome}/>


    </div>
    
  );
}

export default App;