import React from 'react';
import styles from '../styles/Catalogue.module.css';

const CategoryCard = ({ data }) => {
  return (
    <div className={styles.categoryCardContainer} key={data?.id}>
    <div className={''}>
        <img src={data?.image_url} className={styles.categoryImage}>
        </img>
    </div>
    <div className={styles.catTitle}>
        {data?.name}
    </div>
</div>
  )
}

export default CategoryCard