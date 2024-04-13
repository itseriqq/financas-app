import '@/app/globals.css'
import styles from './status.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

const Status = () => {
  return (
    <div>

      <div className="container-fluid">

        <div className="row d-flex">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <div className="row mt-auto mb-auto text-center"> 
                <div className="col-12">
                  <h1>Entradas</h1>
                </div>
              </div>
              <div className="row mt-auto mb-auto text-center"> 
                <div className="col-6">
                  <h2>Valor</h2>
                </div>
                <div className="col-6">
                  icone
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <div className="row mt-auto mb-auto text-center"> 
                <div className="col-12">
                  <h1>Saídas</h1>
                </div>
              </div>
              <div className="row mt-auto mb-auto text-center"> 
                <div className="col-6">
                  <h2>Valor</h2>
                </div>
                <div className="col-6">
                  icone
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card">
              <div className="row mt-auto mb-auto text-center"> 
                <div className="col-12">
                  <h1>Total</h1>
                </div>
              </div>
              <div className="row mt-auto mb-auto text-center"> 
                <div className="col-6">
                  <h2>Valor</h2>
                </div>
                <div className="col-6">
                  icone
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Status;