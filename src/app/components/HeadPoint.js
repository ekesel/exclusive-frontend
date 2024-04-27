import React from 'react';
import styles from '../styles/HeadPoint.module.css';

const HeadPoint = ({ text, customCss }) => {
  return (
    <div className={customCss ? customCss : styles.container}>
        <div className={styles.blob}></div>  
        <div className={styles.text}>
            {text}
        </div>
    </div>
  )
}

export default HeadPoint