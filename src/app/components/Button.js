import React from 'react';
import styles from '../styles/Button.module.css';

const Button = ({text, customCss, onClick }) => {
  return (
    <div className={customCss ? customCss : styles.container} onClick={onClick}>
        <span className={styles.text}>{text}</span>
    </div>
  )
}

export default Button