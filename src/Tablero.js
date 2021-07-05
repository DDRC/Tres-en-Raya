import React from "react";
import Cuadrado from "./Cuadro";
import { utils } from "./Utils";
const Tablero = ({ cuadrados, onClick}) => {
 
    return (<>
    <div className='Tablero'>
        {cuadrados.map(
            (cuadro,i)=>(
                <Cuadrado key={i} signo={cuadro} onClick={()=>onClick(i)} />
            )
        )}
    </div>
    </>)
}

export default Tablero;

/* 
   const dibujarCuados = (i) => {
        return (<Cuadrado signo={cuadrados[i]} onClick={onClick(i)} />)
    }
<div className='fila'>{utils.range(0, 2).map(id => { dibujarCuados(id); })}</div>
<div className='fila'>{utils.range(3, 5).map(id => { dibujarCuados(id); })}</div>
<div className='fila'>{utils.range(6, 8).map(id => { dibujarCuados(id); })}</div> */