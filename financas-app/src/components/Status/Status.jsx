import '@/app/globals.css'
import styles from './status.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

const Status = () => {
  return (
    <div>

      <Container>
        <Row className='mt-3'>


          <Col sm={12} md={4} lg={4} className='mt-3'>
            <div className={`${styles.card} rounded`}>
              {/* acima a classname foi dada desse jeito para que fosse usado tanto styles da
               status.module quanto styles do bootstrap */}
              <Row className='pt-3'>
                <Col md={12}>
                  <div className="text-center">
                    <h1>Entradas</h1>
                  </div>
                </Col>
              </Row>
              <Row className='text-center mt-4'>
                <Col md={6}>
                  <h2>Valor</h2>
                </Col>
                <Col md={6}>
                  <h2>Icone</h2>
                </Col>
              </Row>
            </div>
          </Col>

          <Col sm={12} md={4} lg={4} className='mt-3'>
            <div className={`${styles.card} rounded`}>
              <Row className='pt-3'>
                <Col md={12}>
                  <div className="text-center">
                    <h1>Saídas</h1>
                  </div>
                </Col>
              </Row>
              <Row className='text-center mt-4'>
                <Col md={6}>
                  <h2>Valor</h2>
                </Col>
                <Col md={6}>
                  <h2>Icone</h2>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className='mt-3'>
            <div className={`${styles.card} rounded`}>
              <Row className='pt-3'>
                <Col md={12}>
                  <div className="text-center">
                    <h1>Total</h1>
                  </div>
                </Col>
              </Row>
              <Row className='text-center mt-4'>
                <Col md={6}>
                  <h2>Valor</h2>
                </Col>
                <Col md={6}>
                  <h2>Icone</h2>
                </Col>
              </Row>
            </div>
          </Col>



        </Row>
      </Container>
    </div>
  )
}

export default Status;