import React, { useEffect, useState } from 'react';
import styles from '../styles/navbar.module.css';
import Link from 'next/link';
import { getToken, deleteCookie } from "../actions";
import { usePathname, useRouter } from 'next/navigation';

const NavBar = (props) => {
  const [token, setToken] = useState(null);
  const currentPath = usePathname();
  const router = useRouter();
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [accountDrop, setAccountDrop] = useState(false)

  const logout = () => {
    deleteCookie('token');
    setToken(null)
  }

  useEffect(() => {
    getToken().then(token => {
      setToken(token) // Access token here
    });
    if (currentPath == '/register' || currentPath == '/login')
      setIsLoginPage(true)
    else
      setIsLoginPage(false)
  }, [currentPath])

    // Redirect to a different page
    const redirectToPage = (page) => {
      router.push(page);
    };
  

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
          </div></Link> : <Link href={'/'} onClick={(e) => {
            e.preventDefault();
            logout()
          }} className={`${styles.navItem}`}><div>
              Log out
            </div></Link>}
        </div>
        <div className={styles.optionArea}>
          <div className={styles.searchBar}>
            <input placeholder={'What are you looking for?'} className={styles.searchInput} />
            <div className={styles.searchIcon}></div>
          </div>
          {!isLoginPage && <><div className={styles.wishlist} onClick={(e)=> {
            e.preventDefault();
            redirectToPage('/wishlist')
          }}></div>
            <div className={styles.cart} onClick={(e)=> {
            e.preventDefault();
            redirectToPage('/cart')
          }}></div></>}
          {token && <div className={styles.dropdown}>
            <div className={accountDrop ? styles.accountEnabled : styles.account} onClick={(e) => {
              e.preventDefault();
              if (accountDrop)
                setAccountDrop(false);
              else
                setAccountDrop(true)
            }}>
              <div className={accountDrop ? `${styles.dropdownContent} ${styles.dropdownOnClick}` : styles.dropdownContent}>
                <Link href={'/profile'}>
                  <div className={styles.dropdownRow}>
                    <div className={styles.accountInverted}></div>
                    <span className={styles.dropdownText}>{'Manage My Account'}</span>
                  </div>
                </Link>
                <Link href={'/orders'}>
                  <div className={styles.dropdownRow}>
                    <div className={styles.orderIcon}></div>
                    <span className={styles.dropdownText}>{'My Orders'}</span>
                  </div>
                </Link>
                <Link href={'/cancellations'}>
                  <div className={styles.dropdownRow}>
                    <div className={styles.cancelIcon}></div>
                    <span className={styles.dropdownText}>{'My Cancellations'}</span>
                  </div>
                </Link>
                <Link href={'/reviews'}>
                  <div className={styles.dropdownRow}>
                    <div className={styles.reviewIcon}></div>
                    <span className={styles.dropdownText}>{'My Reviews'}</span>
                  </div>
                </Link>
                <Link href={'/'} onClick={(e)=> {
                  e.preventDefault();
                  logout();
                }}>
                  <div className={styles.dropdownRow}>
                    <div className={styles.logoutIcon}></div>
                    <span className={styles.dropdownText}>{'Logout'}</span>
                  </div>
                </Link>
              </div>
            </div></div>}
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default NavBar