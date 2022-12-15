import React from 'react'
import Menu from '../../components/Menu/Menu'
import Formilario from './Formulario/Formilario'
import Mapa from '../../components/Map/Mapa'
import Footer from '../../components/Fotter/Footer'
import Direccion from '../../components/Map/Direccion'

const Contacto = () => {
  return (
    <div>
        <Menu/>
            <main role="main" className="flex-shrink-0 mt-5">

                        <div className="container">
                        <Formilario/>
                        <hr className="featurette-divider" />
                        <h2 className='direc'>Ubicación</h2>
                            <Mapa/>
                            <Direccion/>
                        <hr className="featurette-divider" />   
                        </div>    
                </main>
            <Footer />
    </div>
  )
}

export default Contacto