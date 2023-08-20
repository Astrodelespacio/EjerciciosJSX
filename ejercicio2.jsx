import React, {useState} from "react";
import './ejercicio2.css';


const tareas = [];
const estado = ["Proceso"];
const Nuevatarea=()=>{

     const[nvaTarea,setnuevaTarea]= useState(tareas)
     
        const agregar=()=>{
            let next=1
        setnuevaTarea([...nvaTarea, {id:next++,tar:tar}])
        
        console.log(nvaTarea)}
        
        
        const[estados,setestado]=useState(estado)

        const estad=()=>{
            setestado(['Finalizado'],['Proceso'])
        }
    
        const[tar,setTar]= useState([]);

     
        

 return(
    <>
    <div className="lista">
       
        <div className="contenido">
            <h1>LISTA DE ACTIVIDADES</h1>
            <input type="text" value={tar} onChange={(e) => setTar(e.target.value)}></input>
            <button type="reset"className="boton" onClick={agregar}>Agregar tarea</button>
            <ul>
                 {
                    nvaTarea.map(item=>{
                    return<li key={nvaTarea.id}>{item.tar}<button type="submit" className="boton" onClick={estad}>{estados}</button></li>})

                 
                 }
         
            </ul>
        </div>
 
    
    </div>
    <hr></hr>
    </>
);
}

export default Nuevatarea;
