import React from 'react';
import styles from '../styles/arrivals.module.css';


const Arrivals = ({ data }) => {
  return (
    <div className={styles.container}>
        <div className={styles.colOne}>
            <a href={data?.[0]?.product_link}>
            <img src={data?.[0]?.background_image_link} className={styles.colOneImage}></img>
            </a>
        </div>
        <div className={styles.colTwo}>
            <div className={styles.rowOne}>
                <a href={data?.[1]?.product_link}>
                <img src={data?.[1]?.background_image_link} className={styles.rowOneImage}></img>
                </a>
            </div>
            <div className={styles.rowTwo}>
                <div className={styles.rowColOne}>
                    <a href={data?.[2]?.product_link}>
                    <img src={data?.[2]?.background_image_link} className={styles.rowColOneImage}></img>
                    </a>
                </div>
                <div className={styles.rowColOne}>
                    <a href={data?.[3]?.product_link}>
                    <img src={data?.[3]?.background_image_link} className={styles.rowColOneImage}></img>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Arrivals