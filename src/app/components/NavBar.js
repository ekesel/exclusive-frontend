import React from 'react';
import styles from '../styles/navbar.module.css';

const NavBar = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.siteName}>
          <span className={styles.siteNameText}>{props?.site_name}</span>
        </div>
        <div className={styles.navList}>
          <div className={props?.active == 'home' ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}>
              Home
          </div>
          <div className={props?.active == 'contact' ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}>
              Contact
          </div>
          <div className={props?.active == 'about' ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}>
              About
          </div>
          <div className={props?.active == 'login' ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}>
              Sign Up
          </div>
        </div>
        <div className={styles.optionArea}>
          <div className={styles.searchBar}>
              <input placeholder={'What are you looking for?'} className={styles.searchInput}/>
              <div className={styles.searchIcon}></div>
          </div>
          <div className={styles.wishlist}></div>
          <div className={styles.cart}></div>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default NavBar