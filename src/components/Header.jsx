import { Link } from 'react-router-dom'
import { BsFillBrightnessHighFill } from 'react-icons/bs'
import BotonCambiarTema from './BotonCambiarTema'
import { FaTooth } from 'react-icons/fa6'
export default function Header() {
  return (
    <header>
      <h1>
        BestBellsa
      </h1>
      <nav>
        <Link to='/'>INICIO </Link>
        <Link to='/Contact'>CONTACTO </Link>
        <Link to='/Favs'>FAVORITOS </Link>
        <BotonCambiarTema />
      </nav>
    </header>
  )
}
