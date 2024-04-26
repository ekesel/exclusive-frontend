import React from 'react';
import styles from '../styles/topbanner.module.css';

const TopBanner = ({ data }) => {

  return (
    <div className={styles.container}>
        <a className={styles.row} href={data?.link}>
            <span className={styles.bannerText}>{data?.text}</span>
        </a>
    </div>
  )
}

export default TopBanner