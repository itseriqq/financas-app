import styles from './list.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BiX } from 'react-icons/bi';
import { BiPencil } from 'react-icons/bi';
import { BiCheck } from 'react-icons/bi';

import React from 'react'

const List = ({ itens }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                        <ul className={styles.list}>
                            {itens.map((item, index) => (
                                <li key={index}>
                                    <Row>
                                        <Col sm={12} md={12} lg={12}>

                                            <div className={styles.item}>
                                                <div className={styles.tipo} style={{backgroundColor: item.tipo === 'Entrada' ? '#14a827' : '#d41010e3'}}></div>
                                                <div className={styles.valor}>
                                                    R$ {item.valor}
                                                </div>

                                                <div className={styles.descricao}>
                                                    {item.descricao}
                                                </div>

                                                <div className={styles.botoesTask}>

                                                    <button className={styles.editaritem} onClick={(event) => handleEditarItem(event, item)}>
                                                        <BiPencil />
                                                    </button>

                                                    <button className={styles.excluiritem} onClick={(event) => handleExcluirItem(event, item)}>
                                                        <BiX />
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default List