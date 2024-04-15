import React from 'react'

import FormF from '@/components/Forms/FormF'
import Status from '@/components/Status/Status'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import styles from './page.module.css'
import List from '@/components/List/List'
import Header from '@/components/Header/Header'

const Home = () => {

  return (
    <div className={styles.pageContainer}>
        <Header></Header>
        <Status></Status>
        <FormF></FormF>
        <List></List>
    </div>

  );
};

export default Home;
