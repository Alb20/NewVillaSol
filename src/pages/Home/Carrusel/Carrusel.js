import React, { Component } from 'react';
import image from "../../../assets/images/S1.1.png"
import image2 from "../../../assets/images/S1.2.png"
import image3 from "../../../assets/images/S1.8.png"
import image4 from "../../../assets/images/S1.9.png"
import image5 from "../../../assets/images/S1.10.png"
import image6 from "../../../assets/images/S1.12.png"
import image7 from "../../../assets/images/S2.1.png"
import image8 from "../../../assets/images/S2.2.png"
export class Carrusel extends Component {
  render() {
    return (
        <div >
        <div id="carouselExampleIndicators" className="carousel slide carousel-fade carru " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>
                <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image} className="d-xl-block caruIndex rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={image4} className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={image5} className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={image6}className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={image7} className="d-xl-block caruIndex  rounded float-start" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={image8} className="d-xl-block caruIndex  rounded float-start" alt="..."/>
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