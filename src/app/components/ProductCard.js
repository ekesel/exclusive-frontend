import React from 'react';
import styles from '../styles/Catalogue.module.css';

const ProductCard = ({ data }) => {

  return (
    <div className={styles.cardContainer} key={data?.id}>
        <div className={''}>
            <img src={data?.image} className={styles.productImage}>
            </img>
        </div>
        <div className={styles.title}>
            {data?.name}
        </div>
        <div className={styles.price}>
            <span className={styles.discountPrice}>Rs.{data?.discounted_price}</span>
            <span className={styles.originalPrice}>Rs.{data?.price}</span>
            <span className={styles.discountPercentage}>{data?.discount_percentage}%</span>
        </div>
    </div>
  )
}

export default ProductCard