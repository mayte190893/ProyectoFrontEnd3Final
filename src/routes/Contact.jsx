import FormularioContacto from '../components/contact/FormularioContacto'
import { GiDirewolf } from 'react-icons/gi'
export default function Contact() {
  return (
    <section classname='section-contact transition-element'>
      <h1>
        Ponte en contacto con la clinica y en breves nos comunicaremos con usted {' '}
      </h1>
      <div className='contenedor-contact'>
        <FormularioContacto />
      </div>
    </section>
  )
}
