import React from 'react';
import styles from '../styles/Catalogue.module.css';


const Catalogue = ({ products, Card, customCss }) => {
  return (
    <div className={customCss ? customCss : styles.container}>
        {products.map((object, i) => <div className={styles.category}><Card data={object} /></div>)}
    </div>
  )
}

export default Catalogue