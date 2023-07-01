import { useContext, useState } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'
import ListadoOdontologos from '../components/home/ListadoOdontologos'


export default function Home() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  const { odontologos } = useContext(ElementosGlobales)

  return (
    <>
      <section className='home transition-element'>
        {console.log(odontologos)}
        <h1>
          Nuestros odontologos disponibles{' '}
        </h1>
        {loading ? <p>loading...</p> : <p>{title}</p>}
        <ListadoOdontologos />
      </section>
    </>
  )
}
