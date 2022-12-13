import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Info extends Component {
  render() {
    return (
      <>
        <div className="container">

            <div className="row">

                <div className="col-lg-4">
                    <h2>Paquetes</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><Link to={'/paqutes'} >
                          <button className='btn btn-primary'>Leer más &raquo;</button>
                    </Link></p>
                </div>

                <div className="col-lg-4">
                    <h2>Eventos</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p><Link className='btn btn-primary colorButton ' to={'/eventos'} role="button">Leer más &raquo; </Link></p>
                </div>

                <div className="col-lg-4">
                    <h2>Citas</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><Link className='btn btn-secondary text-buttonn ' to={'/citas'} role="button">Leer más &raquo; </Link></p>
                </div>

            </div>

        </div>

      </>
    )
  }
}

export default Info