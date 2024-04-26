import React, { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import { getToken, deleteCookie } from "../actions";
import { usePathname } from 'next/navigation';

const NavBar = (props) => {
  const [token, setToken] = useState(null);
  const currentPath = usePathname();

  const logout = () => {
    deleteCookie('token');
    setToken(null)
  }

  useEffect(()=> {
    getToken().then(token => {
      setToken(token) // Access token here
    });
  }, [currentPath])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.siteName}>
          <span className={styles.siteNameText}>{props?.site_name}</span>
        </div>
        <div className={styles.navList}>
          <Link href={'/'} className={currentPath == '/' ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}><div>
              Home
          </div></Link>
          <div className={currentPath == '/contact' ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}>
              Contact
          </div>
          <div className={currentPath == '/about' ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}>
              About
          </div>
          {token == undefined ? <Link href={'/register'} className={(currentPath == '/register') ? `${styles.navItem} ${styles.navActive}` : `${styles.navItem}`}><div>
              Sign Up
          </div></Link> : <Link href={'/'}  onClick={(e)=> {
            e.preventDefault();
            logout()
          }} className={`${styles.navItem}`}><div>
              Log out
          </div></Link>}
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