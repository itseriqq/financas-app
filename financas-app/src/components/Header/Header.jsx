import styles from './header.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

const Header = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='text-center'>
                        <div className={styles.header}>
                            <h1>Gerenciador de Finanças</h1>
                            <a href="itseriqq.github.io/portfolio">Erick.dev</a>
                        </div>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Header