import React, { Component } from 'react';
import image from '../../../assets/images/S2.2.png';
import image1 from '../../../assets/images/S2.1.png';

export class Carrusel extends Component {
  render() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade carru" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                    <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={image} className="d-block  carruS1 rounded float-start" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src={image1} className="d-block carruS1 rounded float-start" alt="..."/>
                            </div>
                    </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
  }
}

export default Carrusel