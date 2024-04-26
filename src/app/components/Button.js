import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({text}) => {
  return (
    <div className={styles.container}>
        <span className={styles.text}>{text}</span>
    </div>
  )
}

export default Button