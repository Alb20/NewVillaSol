import React from 'react'
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Fotter/Footer';
import Carrusel from './Carrusel/Carrusel';
import Info from './Detalles/Info';
import Salones from './Detalles/Salones';
import Mapa from '../../components/Map/Mapa';
const Home = () => {
    return (
    <div>

        <Menu/>
        <main role="main" className="flex-shrink-0 mt-5">

                        <div className="container">
                        
                        <Carrusel/>
                        <hr className="featurette-divider" />
                        <Salones/>
                        <hr className="featurette-divider" />
                        <Info/>
                        <hr className="featurette-divider" />
                        <Mapa/>
                        <hr className="featurette-divider" />
                        </div>
    
                </main>
    
                <Footer />
        </div>
    )
}

export default Home