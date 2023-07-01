import { createContext, useState, useEffect } from 'react'

export const ElementosGlobales = createContext({})

export default function ElementosGlobalesProvider(props) {
  const { children } = props
  const [odontologos, setOdontologos] = useState([])

  const [tema, setTema] = useState('oscuro')

  async function getOdontologos() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setOdontologos(response)
  }

  function cambiarTema() {
    const root = document.documentElement
    if (tema === 'claro') {
      root.classList.remove('oscuro')
      setTema('oscuro')
    } else {
      root.classList.add('oscuro')

      setTema('claro')
    }
  }

  const valoresGlobales = {
    odontologos,
    tema,
    cambiarTema
  }

  // ni bien carga, llamo al get para tener los odontologos de manera global
  useEffect( () => {
    getOdontologos()
  }, [])

  return (
    <ElementosGlobales.Provider value={valoresGlobales}>
      {children}
    </ElementosGlobales.Provider>
  )
}
