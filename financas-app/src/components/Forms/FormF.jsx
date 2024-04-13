import React from 'react'
import '@/app/globals.css'
import styles from '@/components/Forms/FormF.module.css'

const FormF = () => {
  return (
    <div className="container-fluid">

      <div className="row text-center mt-3">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <input type="text" className={styles.preencher} placeholder="Valor" />
          <input type="text" className={styles.preencher} placeholder="Descrição" />
        </div>

        <div className="col-sm-12 col-md-3 col-lg-3 ">
          <div className={`${styles.choices} d-flex align-items-center justify-content-center `}>
            
              <input type="radio" className={styles.choices} value="Entrada" name='escolha' />
              <span>Entrada</span>
              <input type="radio" className={styles.choices} value="Saída" name='escolha' />
              <span>Saídas</span>

          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-lg-3">
          <div>
            <button className="btn btn-dark" type="submit">Enviar</button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default FormF;