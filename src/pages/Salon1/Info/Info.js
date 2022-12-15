import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Info extends Component {
  render() {
    return (
      <div>
              <div className="container">
                    <div className="row">
                        <div className="col align-self-center">
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>  
                        </div>                                        
                    </div>
                {/* <div className='container imgsespS1'>
                    <div className='row'>
                        <div className='col' id='imgs'>
                            <img src="/images/images/S1.12.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className='col' id='imgs'>
                            <img src="/images/images/S1.10.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className='col' id='imgs'>
                            <img src="/images/images/S1.9.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        <div className='col' id='imgs'>
                            <img src="/images/images/S1.1.png"  className='float-none rounded float-start'  alt="" />
                        </div>
                        
                    </div>
                </div>   */}
                    <div className='btn btn-primary d-grid gap-2 col-6 mx-auto' >
                        <Link to='/paquetesS1'>
                            <button className="btn btn-primary d-grid gap-2 col-6 mx-auto "  > Paquetes </button>
                        </Link>
                    </div>
            </div>

      </div>
    )
  }
}

export default Info