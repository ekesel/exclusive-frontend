import React from 'react';
import styles from '../styles/leftCategoryBar.module.css';

const LeftCategoryBar = ({ categories }) => {

  return (
    <div className={styles.container}>
        <div className={styles.categories}>
            {categories.map((object, i) => <div className={styles.category}>{object}</div>)}
        </div>
    </div>
  )
}

export default LeftCategoryBar