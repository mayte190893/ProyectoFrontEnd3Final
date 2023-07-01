import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function DentistId() {
  const navigate = useNavigate()
  const params = useParams()
  const [dentista, setDentista] = useState()
  const [loading, setLoading] = useState(true)

  const volverALosDentistas = () => {
    navigate(-1)
  }

  async function getdentista() {
    setLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    )
    const data = await response.json()
    setDentista(data)
    setLoading(false)
  }
  useEffect(() => {
    getdentista()
  }, [])

  return (
    <section className='section-dentista-especifico'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>Mostrando odontologo n° {dentista.id} </h1>
          <article>
            <h2>{dentista.name}</h2>
            <p>{dentista.username}</p>
            <p>Numero de matricula: {dentista.id}</p>
          </article>
        </>
      )}
      <button onClick={volverALosDentistas}>
        Volver al listado de dentista
      </button>
    </section>
  )
}
