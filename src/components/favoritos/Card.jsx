import userImage from '../../assets/user.png'

import { BsFillTrashFill } from 'react-icons/bs'
export default function Card(props) {
  const { odontologoFavorito, eliminarOdontologoFavorito } = props

  return (
    <li className='card '>
      <img src={userImage} alt='Imagen de usuario' />
      <p>
        <span className='titulo'>Nombre:</span> {odontologoFavorito.name}
      </p>
      <hr></hr>
      <p>
        <span className='titulo'>User:</span> {odontologoFavorito.username}
      </p>
      <hr></hr>
      <BsFillTrashFill
        className='eliminar'
        onClick={() => eliminarOdontologoFavorito(odontologoFavorito)}
      />
    </li>
  )
}
