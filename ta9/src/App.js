import './App.css';
import React, { useEffect, useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Has dado ${contador} clicks`;
  });

  return (
    <div class="App">
      <div class="botones">
        <p class="texto">Has dado {contador} clicks</p>
        <br></br>
        <button onClick={() => setContador(contador + 1)}>
          incrementar el contador
        </button>
        <br></br>
        <button onClick={() => {
          if (contador > 0) {
            setContador(contador - 1);
          }
        }}>
          decrementar el contador
        </button>
        <br></br>
        <button onClick={() => setContador(0)}>
          resetear el contador
        </button>
        </div>
    </div>
  );
}

export default Contador;