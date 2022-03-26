import "./App.css";
import Boton from "./components/Boton.component";
import freecodecamplogo from "./img/freecodecamp-logo.png";
import Pantalla from "./components/Pantalla.component";
import BotonClear from "./components/BotonClear.component";
import { useState } from "react";
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (value) => {
    setInput(input + value);
  };

  const calcularResultado = () => {
    if (input) {setInput(evaluate(input))}
    else {alert("Ingrese valores para realizar los calculos")};
    
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freecodecamplogo}
          className="freecodecamp-logo"
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manajarClic={agregarInput}>1</Boton>
          <Boton manajarClic={agregarInput}>2</Boton>
          <Boton manajarClic={agregarInput}>3</Boton>
          <Boton manajarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manajarClic={agregarInput}>4</Boton>
          <Boton manajarClic={agregarInput}>5</Boton>
          <Boton manajarClic={agregarInput}>6</Boton>
          <Boton manajarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manajarClic={agregarInput}>7</Boton>
          <Boton manajarClic={agregarInput}>8</Boton>
          <Boton manajarClic={agregarInput}>9</Boton>
          <Boton manajarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manajarClic={calcularResultado}>=</Boton>
          <Boton manajarClic={agregarInput}>0</Boton>
          <Boton manajarClic={agregarInput}>.</Boton>
          <Boton manajarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
