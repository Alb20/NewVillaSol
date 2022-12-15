import React from 'react'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Fotter/Footer'
import Contenido from './Contenido/Contenido'
const Citas = () => {
  return (
    <div>
        <Menu/>
            <main role="main" className="flex-shrink-0 mt-5">

                        <div className="container">
                        <Contenido/>                    
                        <hr className="featurette-divider" />
                        </div>    
                </main>           
        <Footer />
    </div>
  )
}

export default Citas