import { useState } from 'react'
import Card from './Card'
import { BsFillSlashCircleFill } from 'react-icons/bs'

export default function ListarOdontologosFavoritos() {
  const [odontologosFavoritos, setOdontologosFavoritos] = useState(
    JSON.parse(localStorage.getItem('odontologosFavoritos') || '[]')
  )

  function eliminarOdontologoFavorito(odontologoAEliminar) {
    const nuevosFavoritos = odontologosFavoritos.filter(
      odontologo => odontologo.id !== odontologoAEliminar.id
    )

    setOdontologosFavoritos(nuevosFavoritos)
    localStorage.setItem(
      'odontologosFavoritos',
      JSON.stringify(nuevosFavoritos)
    )
  }
  return (
    <>
      {odontologosFavoritos.length === 0 ? (
        <h1>
          Aun no marcado ningun odontologo como favorito{' '}
          
          <section className='not-found transition-element'>
            <BsFillSlashCircleFill />
          </section>
        </h1>
      ) : (
        <h1 className='sin-favoritos'>
          Estos son tus odontologos favoritos{' '}
        </h1>
      )}

      <section className='section-cards-favoritos transition-element'>
        <ul className='covers'>
          {odontologosFavoritos.map(odontologoFavorito => (
            <Card
              key={odontologoFavorito.id}
              odontologoFavorito={odontologoFavorito}
              eliminarOdontologoFavorito={eliminarOdontologoFavorito}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
