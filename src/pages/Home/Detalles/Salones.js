import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import salon1 from '../../../assets/images/S1.2.png'
import salon2 from '../../../assets/images/S2.2.png'


export class Salones extends Component {
  render() {
    return (
        <>
        <div className="container">
                    <div className="row">
                        <div className=" col col-sm-6  col-md-6  col-lg-6  col-xxl-6">
                            <Link to = '/salon1' className=' d-flex aling-items-center justify-content-center'>
                                    <img src = {salon1}
                                    className = " float-start rounded  ima-s1"
                                    alt = "React Bootstrap logo" />
                            </Link>
                            <p className='text-center imgsespS1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>
                        </div>
                        <div className=" col col-sm-6 col-md-6  col-lg-6  col-xxl-6">
                            <Link to = '/salon2' className=' d-flex aling-items-center justify-content-center'>
                                    <img src = {salon2}
                                    className = "float-start rounded  ima-s2"
                                    alt = "React Bootstrap logo" />
                            </Link>
                            <p className='text-center imgsespS1 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sunt mollitia numquam magnam perferendis quasi veniam praesentium doloribus voluptatibus neque eum tempora dicta dolorum perspiciatis veritatis eveniet, dolorem ad sequi.</p>
                        </div>
                    </div>
                </div>

        
        
        </>
    )
  }
}

export default Salones