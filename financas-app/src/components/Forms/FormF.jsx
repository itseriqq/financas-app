import React from 'react'
import '@/app/globals.css'
// import styles from './FormF.module.css'

const FormF = () => {
  return (
    <div className="container-fluid">

      <div className="row text-center ps-2">
        <div className="col-md-6">
          <input type="text" id="preencher" placeholder="Valor" />
        </div>
        <div className="col-md-6">
          <input type="text" placeholder="Categoria" />
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-6">
          <label>
            <input type="radio" style={{ marginRight: '3px' }} value="Entrada" name='escolha' />
            Entrada
          </label>
        </div>
        <div className="col-md-6">
          <label>
            <input type="radio" style={{ marginRight: '3px' }} value="Saída" name='escolha' />
            Saída
          </label>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-12">
          <button className="btn btn-dark" type="submit">Enviar</button>
        </div>
      </div>

    </div>

  )
}

export default FormF;