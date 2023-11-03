import Fomulario from "./components/Fomulario"
import Paciente from "./components/Paciente";
import Header from "./components/Header";
import { useState, useEffect } from "react"

function App() {
 const [pacientes, setPacientes] = useState([]);
 const [edit, setEdit] = useState({});

 function eliminarCliente(id) {

   const paicenteActualizado  = pacientes.filter(item => item.id !== id )

  setPacientes(paicenteActualizado)

 }

  return (
    <div className=" md:grid grid-cols-2 gap-5">
      <div>
       <Header
       title = {'Seguimiento de Pacientes'}
       sub = {'Anade Pacientes y'}
       span = {'Adminitralos'}
       />
       <Fomulario
       pacientes = {pacientes}
       setPacientes = {setPacientes}
       edit = {edit}
      />
     </div>
     <div>
       <Header
        title = {'Listado Pacientes'}
        sub = {pacientes.length > 0?'Administra tus': 'No hay paicentes para mostrar'}
        span = {pacientes.length > 0?'Pacientes y Citas': ''}
       />
       {pacientes.map( paciente => (
        
         <Paciente
     
         key={paciente.id}
         paciente ={paciente}
         setEdit = {setEdit}
         eliminarCliente = {eliminarCliente}
         />

       ))
     
       }
    
     </div>
      
    </div>
   
  )
}

export default App
