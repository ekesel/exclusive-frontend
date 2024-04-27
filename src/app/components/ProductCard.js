import React, { useState } from 'react';
import styles from '../styles/Catalogue.module.css';

const ProductCard = ({ data, onClickCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className={styles.cardContainer} key={data?.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={styles.imageCart}>
            <img src={data?.image} className={styles.productImage}></img>
            {isHovered && <div className={styles.AddCartContainer} onClick={(e) => {
              e.preventDefault();
              onClickCart([data?.id])
            }}>{'Add To Cart'}</div>}
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