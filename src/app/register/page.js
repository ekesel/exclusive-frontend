"use client";
import { useState } from "react";
import styles from '../styles/login.module.css';
import Heading from "../components/Heading";
import Button from "../components/Button";
import Link from "next/link";
import { createTokenCookie, getToken } from "../actions";
import { register } from "../api/login";
import { useRouter } from 'next/navigation';

export default function Register() {
    const [error, setError] = useState(null);
    const [name, setName] = useState(null);
    const [emailPhone, setEmailPhone] = useState(null);
    const [password, setPassword] = useState(null);
    const router = useRouter();

    // Redirect to a different page
    const redirectToPage = (page) => {
        router.push(page);
    };

    const createAcc = () => {
        register({
            'name': name,
            'password': password,
            'email_or_phone': emailPhone
        }).then((response) => {
            if (response?.response?.status == 201) {
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
                    <Heading text={'Create an account'} customCss={styles.loginHead} />
                    <Heading text={'Enter your details below'} customCss={styles.loginText} />
                    <input placeholder={'Name'} className={styles.userInput} onChange={(e) => {
                        e.preventDefault();
                        setName(e.target.value)
                    }} value={name} />
                    <input placeholder={'Email or Phone Number'} className={styles.userInput} onChange={(e) => {
                        e.preventDefault();
                        setEmailPhone(e.target.value)
                    }} value={emailPhone} />
                    <input placeholder={'Password'} className={styles.userInput} type="password" onChange={(e) => {
                        e.preventDefault();
                        setPassword(e.target.value)
                    }} value={password} />
                    <Button text={'Create Account'} customCss={styles.registerBtn} onClick={(e) => {
                        e.preventDefault()
                        createAcc();
                    }} />
                    {error && <Heading text={error} customCss={styles.errorMsg} />}
                    <div className={styles.registerActions}>
                        <Heading text={'Already have account?'} customCss={styles.loginText} />
                        <Link href='/login'><span className={styles.loginText}>{'Login'}</span></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
