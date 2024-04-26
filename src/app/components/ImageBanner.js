import React from 'react';
import styles from '../styles/imageBanner.module.css';

const ImageBanner = ({ banner, customcss }) => {

  return (
    <div className={customcss ? customcss : styles.container}>
      <div className={styles.banner}>
        <div className="carousel">
          <a href={banner?.link}>
            <img
              src={banner?.image_link}
              alt={`banner_1`}
              className={styles.image}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ImageBanner