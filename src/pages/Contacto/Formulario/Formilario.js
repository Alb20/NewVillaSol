import React, { Component } from 'react'

export class Formilario extends Component {
  render() {
    return (
    <div>
            <form className="row  espacioform" action='POST'>
                <div className="col-12  ">
                    <label for="inputAddress" className="form-label">Nombre Conmpleto </label>
                    <input type="text" className="form-control separarCitas" id="inputnombre" placeholder="Ingresa tu nombre" required/>
                </div>
                <div className="col-6 " >
                    <label for="inputEmail" className="form-label ">Correo </label>
                    <input type="email" className="form-control separarCitas" id="inputEmail" placeholder='example@example.com' required/>
                </div>
                <div className="col-6 ">
                    <label for="inputPassword4" className="form-label">Telefono</label>
                    <input type="tel" className="form-control separarCitas" id="inputTel" required  maxLength="10"/>
                </div>
                <div className="col-12 espacioform">
                    <button type="submit" className="btn btn-primary text-button">Enviar</button>
                </div>
            </form>
    </div>
    )
  }
}

export default Formilario