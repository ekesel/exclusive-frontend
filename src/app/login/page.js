"use client";
import { useEffect, useState } from "react";
import styles from '../styles/login.module.css';
import Heading from "../components/Heading";
import Button from "../components/Button";
import Link from "next/link";
import { createTokenCookie, getToken } from "../actions";
import { login } from "../api/login";
import { useRouter } from 'next/navigation';

export default function Login() {
  const [error, setError] = useState(null);
  const [emailPhone, setEmailPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const router = useRouter();

  // Redirect to a different page
  const redirectToPage = (page) => {
    router.push(page);
  };

  const loginAcc = () => {
    login({
      'password': password,
      'email_or_phone': emailPhone
    }).then((response) => {
      if (response?.response?.status == 200) {
        setError(null)
        let token = response?.data?.token
        createTokenCookie(token)
        getToken().then(token => {
          redirectToPage('/')
        });
      }
      else {
        if (response?.data?.error)
          setError(response?.data?.error)
      }
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginImage}></div>
        <div className={styles.loginContainer}>
          <Heading text={'Log in to Exclusive'} customCss={styles.loginHead} />
          <Heading text={'Enter your details below'} customCss={styles.loginText} />
          <input placeholder={'Email or Phone Number'} className={styles.userInput} onChange={(e) => {
            e.preventDefault();
            setEmailPhone(e.target.value)
          }} value={emailPhone} />
          <input placeholder={'Password'} className={styles.userInput} type="password" onChange={(e) => {
            e.preventDefault();
            setPassword(e.target.value)
          }} value={password} />
          {error && <Heading text={error} customCss={styles.errorMsg} />}
          <div className={styles.loginActions}>
            <Button text={'Login'} customCss={styles.loginBtn} onClick={(e) => {
              e.preventDefault()
              loginAcc();
            }} />
            <Link href='/'><span className={styles.forgetBtn}>{'Forget Password?'}</span></Link>
          </div>
        </div>
      </div>
    </>
  );
}
