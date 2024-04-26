import React from 'react';
import styles from '../styles/footer.module.css';
import Heading from './Heading';
import Link from 'next/link';

const Footer = ({ supportDetails, appDetails, socialLinks }) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.row}>
                    <Heading text={'Exclusive'} customCss={styles.headText} />
                    <Heading text={'Subscribe'} customCss={styles.subText} />
                    <Heading text={'Get 10% off your first order'} customCss={styles.descTxt} />
                    <div className={styles.searchBar}>
                        <input placeholder={'Enter Your Email'} className={styles.searchInput} />
                        <div className={styles.searchIcon}></div>
                    </div>
                </div>
                <div className={styles.row}>
                    <Heading text={'Support'} customCss={styles.headText} />
                    <Heading text={supportDetails?.address} customCss={styles.descTxt} />
                    <Heading text={supportDetails?.email} customCss={styles.descTxt} />
                    <Heading text={supportDetails?.phone} customCss={styles.descTxt} />
                </div>
                <div className={styles.row}>
                    <Heading text={'Account'} customCss={styles.headText} />
                    <Link href='/myaccount'><Heading text={'My Account'} customCss={styles.descTxt} /></Link>
                    <Link href='/login'><Heading text={'Login / Register'} customCss={styles.descTxt} /></Link>
                    <Link href='/cart'><Heading text={'Cart'} customCss={styles.descTxt} /></Link>
                    <Link href='/wishlist'><Heading text={'Wishlist'} customCss={styles.descTxt} /></Link>
                </div>
                <div className={styles.row}>
                    <Heading text={'Quick Links'} customCss={styles.headText} />
                    <Link href='/privacypolicy'><Heading text={'Privacy Policy'} customCss={styles.descTxt} /></Link>
                    <Link href='/tnc'><Heading text={'Terms of Use'} customCss={styles.descTxt} /></Link>
                    <Link href='/faq'><Heading text={'FAQ'} customCss={styles.descTxt} /></Link>
                    <Link href='/contact'><Heading text={'Contact'} customCss={styles.descTxt} /></Link>
                </div>
                <div className={styles.row}>
                    <Heading text={'Download App'} customCss={styles.headText} />
                    <Link href={appDetails?.playstore_link ? appDetails?.playstore_link : ''}>
                        <div className={styles.playstoreIcon}></div>
                    </Link>
                    <Link href={appDetails?.appstore_link ? appDetails?.appstore_link : ''}>
                        <div className={styles.appstoreIcon}></div>
                    </Link>
                    <div className={styles.socialLinks}>
                        <Link href={socialLinks?.linkedin ? socialLinks?.linkedin : ''}>
                            <div className={styles.linkedInIcon}></div>
                        </Link>
                        <Link href={socialLinks?.x ? socialLinks?.x : ''}>
                            <div className={styles.xIcon}></div>
                        </Link>
                        <Link href={socialLinks?.instagram ? socialLinks?.instagram : ''}>
                            <div className={styles.instagramIcon}></div>
                        </Link>
                        <Link href={socialLinks?.facebook ? socialLinks?.facebook : ''}>
                            <div className={styles.facebookIcon}></div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <span className={styles.copyrightText}>&#169; {'Copyright Exclusive 2024. All Rights Reserved. Developed by '}<Link href='https://www.linkedin.com/in/ekesel/'>{'@ekesel'}</Link></span>
            </div>
        </div>
    )
}

export default Footer