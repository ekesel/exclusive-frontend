import React from 'react';
import styles from '../styles/Catalogue.module.css';


const Catalogue = ({ products, Card }) => {
  return (
    <div className={styles.container}>
        {products.map((object, i) => <div className={styles.category}><Card data={object} /></div>)}
    </div>
  )
}

export default Catalogue