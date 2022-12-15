import React from 'react'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Fotter/Footer'
import InfoPaquetes from './InfoPaquetes/InfoPaquetes'
const Paquetes = () => {
  return (
    <div>
        <Menu/>
            <main role="main" className="flex-shrink-0 mt-5">

                        <div className="container">
                        <InfoPaquetes/>                    
                        <hr className="featurette-divider" />
                        </div>    
                </main>           
        <Footer />
    </div>
  )
}

export default Paquetes