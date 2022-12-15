import React, { Component } from 'react'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Fotter/Footer'
import Carrusel from './Carrusel/Carrusel'
import Info from './Info/Info'
import Mapa from '../../components/Map/Mapa';
import Direccion from '../../components/Map/Direccion'
export class Salon1 extends Component {
  render() {
    return (
      <div>
           <Menu/>
        <main role="main" className="flex-shrink-0 mt-5">

                        <div className="container">
                        <Carrusel/>
                      
                        <hr className="featurette-divider" />
                        <Info/>
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
}

export default Salon1