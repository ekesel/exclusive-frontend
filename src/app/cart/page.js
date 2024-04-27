"use client";
import { useEffect, useState } from "react";
import styles from '../styles/cart.module.css';
import { getToken } from "../actions";
import { usePathname } from 'next/navigation';
import { toast } from 'react-toastify';
import Link from "next/link";
import { getCartItems } from "../api/cart";

export default function Cart() {
    const [token, setToken] = useState(null);
    const [products, setProducts] = useState([])
    const currentPath = usePathname();

    useEffect(() => {
        getToken().then(token => {
            setToken(token) // Access token here
            getCartItems({
                'token': token?.value
            }).then((response) => {
                if (response.response.status == 200) {
                    setProducts(response?.data)
                }
                else {
                    setProducts([])
                }
            });
        });
    }, [currentPath])

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
                                <input type="number" value={product?.quantity} className={styles.productQuantity} />
                            </div>
                            <div className={styles.tableRow}>
                                <div>Rs. {product?.subtotal}</div>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </>
    );
}
