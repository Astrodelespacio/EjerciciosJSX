import React, {useState} from "react";
import './ejercicio3.css';

const Formulario=()=>{

   const [info,setInfo] = useState({
      nombre:'',
      correo:'',
      contraseña:''
   })

   const manejodatos=(e) =>{
    setInfo({...info,[e.target.name] : e.target.value
    })
   }

   const enviarInfo=(e)=>{
    e.preventDefault()
    console.log('enviar datos'+ info.nombre+''+ info.correo+''+info.contraseña)
   }
return(
 <>   
    <div className="formulario">
        <h1>Ingrese sus Datos Personales</h1>
    <form onSubmit={enviarInfo}>
        <div className="mb-3">
            <label  for="exampleInputEmail1" className="form-label">Nombre Completo</label>
            <input type="text" className="form-control"  onChange={manejodatos} name="nombre" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-3">
            <label  for="exampleInputEmail1" className="form-label">Correo Electrónico</label>
            <input type="mail" className="form-control"  onChange={manejodatos} name="correo" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
        </div>
        <div class="mb-3">
            <label  for="exampleInputEmail1" className="form-label">Contraseña</label>
            <input type="password" className="form-control"  onChange={manejodatos} name="contraseña" id="exampleInputPassword1"/>
        </div>
  
        <button type="submit" className="btn btn-primary">Enviar Datos</button>
    </form>
    </div>
    <hr></hr>
    <div className="informacion">

        <div className="card">
            <img src="./img/img.jpg" class="card-img-top" alt="..."/>
            <div class="card-body">
            <p class="card-text">Nombre:{info.nombre}</p>
            <p class="card-text">Correo:{info.correo}</p>
            <p class="card-text">Contraseña:{info.contraseña}</p>
            </div>
        </div>

    </div>
  </>
)
};

export default Formulario 