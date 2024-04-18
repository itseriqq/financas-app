"use client";

import React, { useEffect, useState } from 'react';

import FormF from '@/components/Forms/FormF'
import Status from '@/components/Status/Status'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import styles from './page.module.css'
import List from '@/components/List/List'
import Header from '@/components/Header/Header'

const Home = () => {

  const [listaItens, setListaItens] = useState(() => {
    if (typeof window !== "undefined") {
      const savedItems = localStorage.getItem('listaItens');
      return savedItems ? JSON.parse(savedItems) : [];
    }
    return [];
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem('listaItens', JSON.stringify(listaItens));
    }
  }, [listaItens]);


  const adicionarItem = (novoItem) => {
    setListaItens([...listaItens, novoItem]);
  };

  const handleEditarItem = (event, item) => {
    const updatedItems = listaItens.map((i) => {
      if (i === item) {
        return { ...i, editando: !i.editando };
      }
      return i;
    });
    setListaItens(updatedItems);
  };

  const handleEditarValor = (event, item) => {
    const newValue = event.target.value;
  
    if (!isNaN(newValue) || newValue === '') {
      
      if (newValue === '') {
        const confirmDelete = window.confirm("Tem certeza de que deseja excluir este item?");
        if (confirmDelete) {
          const updatedItems = listaItens.filter((i) => i !== item);
          setListaItens(updatedItems);
        }
      } else {
        const updatedItems = listaItens.map((i) => {
          if (i === item) {
            return { ...i, valor: newValue };
          }
          return i;
        });
        setListaItens(updatedItems);
      }
    }
  };

  const handleEditarDescricao = (event, item) => {
    const updatedItems = listaItens.map((i) => {
      if (i === item) {
        return { ...i, descricao: event.target.value };
      }
      return i;
    });
    setListaItens(updatedItems);
  };

  const handleEditarTipo = (event, item) => {
    const updatedItems = listaItens.map((i) => {
      if (i === item) {
        return { ...i, tipo: event.target.value };
      }
      return i;
    });
    setListaItens(updatedItems);
  };

  const handleExcluirItem = (event, item) => {
    const updatedItems = listaItens.filter((i) => i !== item);
    setListaItens(updatedItems);
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
          <Status titulo="Entradas" valor={`R$ ${calcularEntradas()}`} />
          <Status titulo="Saídas" valor={`R$ ${calcularSaidas()}`} />
          <Status titulo="Total" valor={`R$ ${calcularTotal()}`} />
        </Row>
      </Container>
      <FormF adicionarItem={adicionarItem} handleEditarTipo={handleEditarTipo} />
      <List itens={listaItens} handleEditarItem={handleEditarItem} handleEditarValor={handleEditarValor} handleEditarDescricao={handleEditarDescricao} handleExcluirItem={handleExcluirItem} handleEditarTipo={handleEditarTipo} />

    </div>

  );
};

export default Home;
