import React from 'react'

const Header = ({title, sub, span}) => {
  return (
    <div>
        <header className="py-3 px-4 text-center mb-4 w-full">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="font-bold">{sub} <span className="text-indigo-600 font-bold">{span}</span></p>
      </header>
      
    </div>
  )
}

export default Header
