"use client";
import { useEffect, useState } from "react";
import styles from '../styles/cart.module.css';
import { getToken } from "../actions";
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from "next/link";
import { getCartItems } from "../api/cart";
import Button from "../components/Button";
import HeadPoint from "../components/HeadPoint";
import HorizontalLine from "../components/HorizontalLine";

export default function Cart() {
    const [token, setToken] = useState(null);
    const [products, setProducts] = useState([])
    const currentPath = usePathname();
    const router = useRouter();
    const [subTotal, setSubTotal] = useState(0);
    const [shipping, setShipping] = useState(0);

    // Redirect to a different page
    const redirectToPage = (page) => {
        router.push(page);
    };

    useEffect(() => {
        getToken().then(token => {
            if (token) {
                setToken(token) // Access token here
                getCartItems({
                    'token': token?.value
                }).then((response) => {
                    if (response.response.status == 200) {
                        setProducts(response?.data)
                        let subtot= 0;
                        response?.data?.map((product) => {
                            subtot += product?.subtotal
                        })
                        setSubTotal(subtot)
                    }
                    else {
                        setProducts([])
                    }
                });
            }
            else {
                toast.info('Please login first to add items')
                redirectToPage('/login')
            }
        });
    }, [currentPath])

    const changeQuanity = (value, product_id) => {
        let changedProducts = []
        products.map((product) => {
            if (product.id == product_id)
                product.quantity = value
            changedProducts.push(product)
        })
        setProducts(changedProducts)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.breadcrumb}>
                    <Link href={'/'}> <span className={styles.breadcrumbRow}>Home</span></Link> /
                    <Link href={'/cart'}><span className={styles.breadcrumbRowActive}> Cart</span></Link>
                </div>
                <div className={styles.cartTable}>
                    <div className={styles.tableHead}>
                        <div className={styles.headRow}>Product</div>
                        <div className={styles.headRow}>Price</div>
                        <div className={styles.headRow}>Quantity</div>
                        <div className={styles.headRow}>Subtotal</div>
                    </div>
                    {products.map((product, i) => <div className={styles.tableCols}>
                        <div className={styles.tableRows}>
                            <div className={styles.tableRow}>
                                <img className={styles.productImage} src={product?.image}></img>
                                <div>{product?.name}</div>
                            </div>
                            <div className={styles.tableRow}>
                                <div>Rs. {product?.price}</div>
                            </div>
                            <div className={styles.tableRow}>
                                <input type="number" value={product?.quantity} className={styles.productQuantity} onChange={(e) => {
                                    e.preventDefault();
                                    changeQuanity(e.target.value, product.id)
                                }} />
                            </div>
                            <div className={styles.tableRow}>
                                <div>Rs. {product?.subtotal}</div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
                <div className={styles.btnContainer}>
                    <Button text={'Return To Shop'} customCss={styles.cartBtn} />
                    <Button text={'Update Cart'} customCss={styles.cartBtn} />
                </div>
                <div className={styles.lowerContainer}>
                    <div className={styles.couponContainer}>
                        <div className={styles.couponBar}>
                            <input placeholder={'Coupon Code?'} className={styles.couponInput} />
                        </div>
                        <Button text={'Apply Coupon'} customCss={styles.couponBtn} />
                    </div>
                    <div className={styles.billingContainer}>
                        <span className={styles.totalText}>{'Cart Total'}</span>
                        <div className={styles.billingRows}>
                            <span>{'Subtotal:'}</span>
                            <span>{'Rs. '+subTotal}</span>
                        </div>
                        <HorizontalLine customCss={styles.HorizontalLine} />
                        <div className={styles.billingRows}>
                            <span>{'Shipping:'}</span>
                            <span>{shipping}</span>
                        </div>
                        <HorizontalLine customCss={styles.HorizontalLine} />
                        <div className={styles.billingRows}>
                            <span>{'Total:'}</span>
                            <span>{'Rs. ' +(subTotal + shipping)}</span>
                        </div>
                        <div className={styles.checkoutContainer}>
                            <Button customCss={styles.checkoutBtn} text={'Process to checkout'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
