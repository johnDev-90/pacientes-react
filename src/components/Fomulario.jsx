
import { useState, useEffect, useInsertionEffect } from "react"
import Mensaje from "./Mensaje"
import Paciente from "./Paciente"

const Fomulario = ({pacientes,setPacientes, edit}) => {


    const [nombre, setNombre] = useState('')
    const [propietario, setpropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')
    const [mensaje, setMensaje] = useState('')
   

    useEffect(() => {

        if (Object.keys(edit).length > 0) {
            setNombre(edit.nombre);
            setpropietario(edit.propietario);
            setEmail(edit.email);
            setFecha(edit.fecha)
            setSintomas(edit.sintomas);
        }
        
    },[edit])



   
    function generarID(){
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36);

        return random + date;
    } 
 

    function handleSubmit(e){
        e.preventDefault();

        
        const pacienteObjt = {nombre, propietario, email, fecha,sintomas}
        

        
        if (Object.values(pacienteObjt).includes('')) {

            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('');
            }, 3000);
            return;
            
        }

        if (edit.id) {
            pacienteObjt.id = edit.id;
          console.log(pacienteObjt)
          console.log(edit);

          const paicentesActualizado = pacientes.map(item => item.id === edit.id? pacienteObjt: item)
          setPacientes(paicentesActualizado);
        }else{
            pacienteObjt.id = generarID();
            setPacientes([...pacientes,pacienteObjt]);
        }

        setNombre('');
        setpropietario('');
        setEmail('');
        setFecha('')
        setSintomas('');
    }

  return (
    <div>
        {mensaje && <Mensaje mensaje = {mensaje}/>}
      <form  className='mt-3 py-4 px-4 rounded-md shadow-md bg-white w-full' action="submit">
        <div className='flex flex-col mb-2'>
            <label className='font-bold uppercase' htmlFor="nombre">Nombre Mascota</label>
            <input value={nombre} onChange={(e) => setNombre(e.target.value)} className='border-solid border-2 placeholder: p-1' id='nombre' type="text" placeholder="Nombre de la Mascota" />
        </div>
        <div className='flex flex-col mb-2'>
            <label className='font-bold uppercase' htmlFor="propietario">Nombre propietaio</label>
            <input value={propietario} onChange={(e) => setpropietario(e.target.value)} className='border-solid border-2 placeholder: p-1' id='propietario' type="text" placeholder="Nombre del Propietario" />
        </div>
        <div className='flex flex-col mb-2'>
            <label className='font-bold uppercase' htmlFor="correo">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-solid border-2 placeholder: p-1' id='correo' type="text" placeholder="Email Contanto Propietario" />
        </div>
        <div className='flex flex-col mb-2'>
            <label className='font-bold uppercase' htmlFor="fecha">Alta</label>
            <input value={fecha} onChange={(e) => setFecha(e.target.value)} className='border-solid border-2 placeholder: p-1' id='fecha' type="date"/>
        </div>
        <div className='flex flex-col mb-2'>
            <label className='font-bold uppercase' htmlFor="nombre">Sintomas</label>
            <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} className='border-solid border-2 placeholder: p-1' id='nombre' type="text" placeholder="Describe los sintomas"/>
        </div>
        <div className='text-center w-full bg-indigo-600 py-2 px-3 rounded-md mt-3 hover:bg-indigo-700'>
          <input onClick={handleSubmit} className=' text-white font-bold' type="submit" value={edit.id? 'Guardar Cambios' :'Agregar Paiciente'} />
        </div>
      </form>
      
    </div>

  )
}

export default Fomulario
