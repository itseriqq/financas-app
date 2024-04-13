import React from 'react'

import FormF from '@/components/Forms/FormF'
import Status from '@/components/Status/Status'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'
import styles from './page.module.css'

const Home = () => {

  return (
    <div className={styles.pageContainer}>
      <Status></Status>
      <FormF></FormF>
    </div>

  );
};

export default Home;
