import React from 'react'
import '@/app/globals.css'
import styles from '@/components/Forms/FormF.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

const FormF = () => {
  return (
    <Container>
      <Row className='text-center mt-3'>

        <Col sm={12} md={7} lg={7}>
          <input type="text" className={styles.preencher} placeholder="Valor" />
          <input type="text" className={styles.preencher} placeholder="Descrição" />
        </Col>

        <Col sm={12} md={2} lg={2}>
          <div className={`${styles.choices} d-flex align-items-center justify-content-center `}>

            <input type="radio" className={styles.choices} value="Entrada" name='escolha' />
            <span>Entrada</span>
            <input type="radio" className={styles.choices} value="Saída" name='escolha' />
            <span>Saídas</span>

          </div>
        </Col>

        <Col sm={12} md={3} lg={3}>
          <div>
            <button className="btn btn-dark" type="submit">Enviar</button>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default FormF;