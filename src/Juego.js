import logo from './logo.svg';
import './App.css';
import Cuadrado from './Cuadro';
import React, { useState } from 'react';
import Tablero from './Tablero';
import { CalcularGanador } from './VerGanador';

function Juego() {
  const [movimientos, setMovimiento] = useState([Array(9).fill(null)]);
  const [movimientoNumero, setmovimientoNumero] = useState(0);
  const [xSigue, setxSigue] = useState(true);
  const XoO = xSigue ? 'X' : 'O';
  const ganador = CalcularGanador(movimientos[movimientoNumero]);

  const manejarClick = (i) => {
    const MoveNumb = movimientos.slice(0, movimientoNumero + 1);
    const Actual = movimientos[movimientoNumero];
    const quadrados = [...Actual];
    //si gana o esta ocupado devuelve vacio  para que se detenga
    if (ganador || quadrados[i]) return;
    // dibujar la ficha
    quadrados[i] = XoO;
    setMovimiento([...MoveNumb, quadrados]);
    setmovimientoNumero(MoveNumb.length);
    setxSigue(!xSigue);
  }

  const IrA=(paso)=>{
    setmovimientoNumero(paso);
    setxSigue(paso % 2 === 0);
  };

const VerMovimientos=()=>
 movimientos.map((_paso,movimiento)=>{
   const destino=movimiento?`ir al movimiento ${movimiento}`:'Reiniciar';
   return(
     <li key={movimiento}>
        <button onClick={()=>IrA(movimiento)}>{destino}</button>
     </li>
   );
 });


  return (
    <>
    <div className="Juego">
      <center>
        <h1>Tres en raya</h1>
      </center>
      <Tablero cuadrados={movimientos[movimientoNumero]} onClick={manejarClick} />
      <div className='informacion'>
        <h3>movimientos</h3>
        {VerMovimientos()}
        <div className='detalle'>
          {ganador?'Ganan l@s '+(XoO=='X'?'O':'X'):'Siguiente Jugador: '+XoO}
        </div>
      </div>
    </div>
  </>
  );
}

export default Juego;
