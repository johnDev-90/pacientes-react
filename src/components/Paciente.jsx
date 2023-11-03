import React from 'react'

const Paciente = ({paciente, setEdit, eliminarCliente}) => {

    const {nombre, propietario, email, fecha,sintomas, id} = paciente;
    
  return (
    <div>
       
      <div className='bg-white w-full rounded-md shadow-md py-5 px-3 mb-5'>
        <p className='font-bold uppercase mb-2'>Nombre: {''} <span className='lowercase font-normal'>{nombre}</span></p>
        <p className='font-bold uppercase mb-2' >Propietario:{''} <span className='lowercase font-normal'>{propietario}</span></p>
        <p className='font-bold uppercase mb-2'>Email:{''} <span className='lowercase font-normal'>{email}</span></p>
        <p className='font-bold uppercase mb-2'>Fecha Alta:{''} <span className='lowercase font-normal'>{fecha}</span></p>
        <p className='font-bold uppercase mb-2'>Sintomas:{''} <span className='lowercase font-normal'>{sintomas}</span></p>

        <div className='flex mt-10 mb-2 justify-between w-full flex-col md:flex-row '>
        <div>
        <input onClick={(e) => setEdit(paciente)} className='bg-indigo-600 uppercase hover:bg-indigo-700 py-2 px-4 rounded-md text-white font-bold w-full mb-5 md:mb-3' type="button" value={'Editar'} />
        </div>
        <div>
        <input onClick={(e) => eliminarCliente(id)} className='bg-red-600 uppercase hover:bg-red-700 py-2 px-4 rounded-md text-white font-bold w-full' type="button" value={'Eliminar'} />
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default Paciente
