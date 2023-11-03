import React from 'react'

const Mensaje = ({mensaje}) => {
  return (
    <div className='text-center w-full text-m text-white bg-red-700 font-bold p-2 rounded-md uppercase'>
      <p>{mensaje}</p>
    </div>
  )
}

export default Mensaje
