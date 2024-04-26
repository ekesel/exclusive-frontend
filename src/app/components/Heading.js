import React from 'react';
import styles from '../styles/Heading.module.css';

const Heading = ({ text, customCss }) => {
  return (
    <div className={customCss ? customCss : styles.container}>
      {text}
    </div>
  )
}

export default Heading