import styles from './list.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

import React from 'react'

const List = ({ itens }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Row>
                                    <Col sm={5} md={7} lg={7} className={styles.info}>
                                        <div className={styles.texto}>{item.valor}</div>
                                        <div className={styles.texto}>{item.descricao}</div>
                                        <div className={styles.texto}>{item.tipo}</div>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default List