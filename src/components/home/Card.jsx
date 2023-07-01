import userImage from '../../assets/user.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsHeartFill, BsHeart, BsInfoCircle } from 'react-icons/bs'

export default function Card(props) {
  const { odontologo, esFavorito, manejarFavoritos } = props

  const navigate = useNavigate()

  const handleClick = () => {
    // Navegar al enlace al hacer clic en la tarjeta
    // Puedes ajustar la ruta según tus necesidades
    navigate(`/Dentis/${odontologo.id}`)
  }

  return (
    <li className='card' onClick={handleClick}>
      <img src={userImage} alt='Imagen de usuario' />
      <p>
        <span className='titulo'>Nombre:</span> {odontologo.name}
      </p>
      <hr></hr>
      <p>
        <span className='titulo'>User:</span> {odontologo.username}
      </p>
      <hr></hr>
      <Link to={`/Dentis/${odontologo.id}`}>
        <BsInfoCircle className='info' />
      </Link>
      {esFavorito ? (
        <BsHeartFill
          className='favorito'
          onClick={e => {
            e.stopPropagation() // Evitar la propagación del evento click a la tarjeta
            manejarFavoritos(odontologo)
          }}
        />
      ) : (
        <BsHeart
          className=''
          onClick={e => {
            e.stopPropagation() // Evitar la propagación del evento click a la tarjeta
            manejarFavoritos(odontologo)
          }}
        />
      )}
    </li>
  )
}
