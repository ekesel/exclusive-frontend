import React from 'react';
import styles from '../styles/HorizontalLine.module.css';

const HorizontalLine = ({ customCss }) => {
  return (
    <div className={customCss ? customCss : styles.container}></div>
  )
}

export default HorizontalLine