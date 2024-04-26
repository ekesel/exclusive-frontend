"use client";
import { useEffect, useState } from "react";
import styles from '../styles/login.module.css';
import Heading from "../components/Heading";
import Button from "../components/Button";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState(null);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginImage}></div>
        <div className={styles.loginContainer}>
            <Heading text={'Log in to Exclusive'} customCss={styles.loginHead}/>
            <Heading text={'Enter your details below'} customCss={styles.loginText}/>
            <input placeholder={'Email or Phone Number'} className={styles.userInput}/>
            <input placeholder={'Password'} className={styles.userInput}/>
            <div className={styles.loginActions}>
              <Button text={'Login'} customCss={styles.loginBtn} />
              <Link href='/'><span className={styles.forgetBtn}>{'Forget Password?'}</span></Link>
            </div>
        </div>
      </div>
    </>
  );
}
