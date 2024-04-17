import '@/app/globals.css'
import styles from './status.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FiTrendingUp } from "react-icons/fi";

import React from 'react'

const Status = ({ titulo, valor, Icone }) => {
  return (

    <Col sm={12} md={4} lg={4} className='mt-3'>
      <div className={`${styles.card} rounded`}>
        {/* acima a classname foi dada desse jeito para que fosse usado tanto styles da
               status.module quanto styles do bootstrap */}
        <Row className='pt-3'>
          <Col md={12}>
            <div className="text-center">
              <h1>{titulo}</h1>
            </div>
          </Col>
        </Row>
        <Row className='text-center mt-2'>
          <Col md={9} styles={{marginRight: '30px'}}>
            <h2>{valor}</h2>
          </Col>
          <Col md={3} styles={{marginLeft: '10px'}}>

            {Icone && <Icone />}

          </Col>
        </Row>
      </div>
    </Col>

  )
}

export default Status;