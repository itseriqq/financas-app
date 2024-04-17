

import React, { useState } from 'react';
import '@/app/globals.css'
import styles from '@/components/Forms/FormF.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

const FormF = ({ adicionarItem }) => {
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('Entrada');
  const [editando, setEditando] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (valor.trim() === "") {
      alert("Por favor, preencha o campo 'valor'.");
    } else {
      const novoItem = { valor, descricao, tipo, editando};
      adicionarItem(novoItem);
      setValor('');
      setDescricao('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Row className='text-center mt-3'>

          <Col sm={12} md={7} lg={7}>
            <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} className={styles.preencher} placeholder="Valor" pattern="[0-9]*" onKeyPress={(e) => /[0-9]/.test(e.key) || e.key === 'Backspace' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' ? null : e.preventDefault()} />
            <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} className={styles.preencher} placeholder="Descrição" />
          </Col>

          <Col sm={12} md={2} lg={2}>
            <div className={`${styles.choices} d-flex align-items-center justify-content-center`}>

              <input type="radio" checked={tipo === 'Entrada'} onChange={(e) => setTipo('Entrada')} value="Entrada" name='escolha' />
              <span>Entrada</span>
              <input type="radio" checked={tipo === 'Saída'} onChange={(e) => setTipo('Saída')} value="Saída" name='escolha' />
              <span>Saídas</span>

            </div>
          </Col>

          <Col sm={12} md={3} lg={3}>
            <div className={styles.envio}> 
              <button className={styles.botao} type="submit">Enviar</button>
            </div>
          </Col>
        </Row>
      </Container>
    </form>
  )
}

export default FormF;