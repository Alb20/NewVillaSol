import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/LogoV 6.png';

const Footer = () => {
  return (

    <div>
        <footer className='text-black py-3 bg-white'>
            <div className='container'>
                <nav className='row'>
                    <Link to = '/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                    <img src = {logo}
                                width = "80"
                                height = "80"
                                className = "d-inline-block align-top"
                                alt = "React Bootstrap logo" />
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='py-2'>
                            <Link to = '/nosotros' className='text-reset'>Nosotros</Link>
                        </li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='font-weight-bold mb-3 py-2'>
                            <Link to = '/contacto' className='text-reset'>Contacto</Link>
                        </li>
                        <li className='d-flex justify-content-between'>
                        <i class="bi bi-whatsapp"></i>
                        </li>
                        
                    </ul>
                    
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li className='py-2'>
                            <Link to = '/aviso' className='text-reset'>Aviso de privacidad</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    </div>
    // <div>
    //         <footer className="container">
                
    //         {/* <p className="float-right"><a href="#">Subir</a></p>
    //         <p>&copy; {(new Date().getFullYear())} Mi Proyecto, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p> */}
    //         </footer>
    // </div>
  )
}

export default Footer