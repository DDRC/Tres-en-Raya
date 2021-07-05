import React from   'react';
import { useState } from 'react';

const Cuadrado=({signo,onClick})=>{
    const tipo = signo ? `cuadros ${signo}`:`cuadros`;
    return(<><button className={tipo} onClick={onClick}>{signo}</button></>)
};

    export default Cuadrado;
    
