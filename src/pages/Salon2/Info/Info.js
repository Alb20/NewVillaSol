import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Info extends Component {
  render() {
    return (
      <div>

        <div className="container ">
            <div className="row">                   
                <div className="col  text center align-self-center">
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>  
                </div> 
            </div>
        </div>    
            <div className="btn btn-primary d-grid gap-2 col-6 mx-auto imgsespS1 ">
                <Link to='/paquetesS2'>
                    <button className="btn btn-primary d-grid gap-2 col-6 mx-auto color-button" type="button"  > Paquetes </button>
                </Link>
            </div>
    </div>
    )
  }
}

export default Info