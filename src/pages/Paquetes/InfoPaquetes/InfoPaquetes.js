import React from 'react'
import { Link } from 'react-router-dom'
import pdf from '../../../assets/Docs/PaquetesSalon1.pdf'
const InfoPaquetes = () => {
  return (
    <div>
        <div className='container text-center'>
            <div>
                <p>  <embed src={pdf} width="1100px" height="1160px"/></p>
            </div>
            <div className="btn btn-primary d-grid gap-2 col-6 mx-auto imgsespS1 ">
                <Link to='/agendarCita'>
                    <button className="btn btn-primary d-grid gap-2 col-6 mx-auto color-button" type="button"  >Agendar Cita </button>
                </Link>
            </div>
                
        </div>
    </div>
  )
}

export default InfoPaquetes