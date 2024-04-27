import React from 'react';
import styles from '../styles/Catalogue.module.css';


const Catalogue = ({ products, Card, customCss, onClickCart }) => {
  return (
    <div className={customCss ? customCss : styles.container}>
        {products.map((object, i) => <div className={styles.category}><Card data={object} onClickCart={onClickCart} /></div>)}
    </div>
  )
}

export default Catalogue