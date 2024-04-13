import React from 'react'
import '@/app/globals.css'
import styles from './FormF.css'

const FormF = () => {
  return (
    <div className="container-fluid">

      <div className="row text-center mt-3">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <input type="text" className="preencher" placeholder="Valor" />
          <input type="text" className="preencher" placeholder="Descrição" />
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3">
          <div className="radio-input">
            <label>
              <input type="radio" value="Entrada" name='escolha' />
              Entrada
            </label>
            <label>
              <input type="radio" value="Saída" name='escolha' />
              Saída
            </label>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div>
            <button className="btn btn-dark ms-0" type="submit">Enviar</button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default FormF;