import React, {useState} from "react";
import './ejercicio1.css';

const Conteo =()=>{
    const [contador, setContador] = useState(0);

    return(
        <>
         <h1>CONTADOR</h1>
        <div className="contador">
           
            <button className="boton" onClick={()=>setContador(conta => conta -= 1)}>-</button>
            <p>{ contador }</p>
            <button className="boton" onClick={()=>setContador(conta => conta += 1)}>+</button>
        </div>
        <hr></hr>
        </>
    );
};






export default Conteo;