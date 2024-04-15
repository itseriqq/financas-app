import React from 'react'

import FormF from '@/components/Forms/FormF'
import Status from '@/components/Status/Status'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import styles from './page.module.css'
import List from '@/components/List/List'
import Header from '@/components/Header/Header'

const Home = () => {

  return (
    <div className={styles.pageContainer}>
        <Header></Header>
        <Container>
          <Row className='mt-3'>
            <Status titulo="Entradas" valor="R$ X" icone="1"/>
            <Status titulo="Saídas" valor="R$ X" icone="2"/>
            <Status titulo="Total" valor="R$ X" icone="3"/>
          </Row>
        </Container>
        <FormF></FormF>
        <List></List>
    </div>

  );
};

export default Home;
