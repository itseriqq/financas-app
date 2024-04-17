"use client";

import React, { useState } from 'react';

import FormF from '@/components/Forms/FormF'
import Status from '@/components/Status/Status'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FiTrendingUp, FiTrendingDown, FiDollarSign } from "react-icons/fi"; // Importando outros ícones
import './globals.css'
import styles from './page.module.css'
import List from '@/components/List/List'
import Header from '@/components/Header/Header'

const Home = () => {

  const [listaItens, setListaItens] = useState([]);

  const adicionarItem = (novoItem) => {
    setListaItens([...listaItens, novoItem]);
  };

  const calcularEntradas = () => {
    const entradasTotal = listaItens.reduce((total, item) => {
      if (item.tipo === 'Entrada') {
        const valor = parseFloat(item.valor || '0'); // Converte para número ou substitui por 0 se vazio
        return total + valor;
      }
      return total;
    }, 0);
    return entradasTotal.toFixed(2);
  };

  const calcularTotal = () => {
    const entradas = parseFloat(calcularEntradas());
    const saidas = parseFloat(calcularSaidas());
    const total = entradas - saidas;
    return total.toFixed(2);
  };

  const calcularSaidas = () => {
    const saidasTotal = listaItens.reduce((total, item) => {
      if (item.tipo === 'Saída') {
        const valor = parseFloat(item.valor || '0'); // Converte para número ou substitui por 0 se vazio
        return total + valor;
      }
      return total;
    }, 0);
    return saidasTotal.toFixed(2);
  };

  return (
    <div className={styles.pageContainer}>
      <Header></Header>
      
      <Container>
        <Row className='mt-3'>
          <Status titulo="Entradas" valor={`R$ ${calcularEntradas()}`} Icone={FiTrendingUp} />
          <Status titulo="Saídas" valor={`R$ ${calcularSaidas()}`} Icone={FiTrendingDown} />
          <Status titulo="Total" valor={`R$ ${calcularTotal()}`} Icone={FiDollarSign} />
        </Row>
      </Container>
      <FormF adicionarItem={adicionarItem} />
      <List itens={listaItens} />

    </div>

  );
};

export default Home;
