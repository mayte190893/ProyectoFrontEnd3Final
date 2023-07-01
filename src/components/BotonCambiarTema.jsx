import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { useContext, useEffect } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'

export default function BotonCambiarTema() {
  const { tema, cambiarTema } = useContext(ElementosGlobales)

  {
    console.log(tema)
  }

  return (
    <>
      <button onClick={cambiarTema}>
        {tema === 'claro' ? (
          <BsFillBrightnessHighFill />
        ) : (
          <BsFillMoonStarsFill />
        )}
      </button>
    </>
  )
}
