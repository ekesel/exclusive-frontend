"use client";
import { useEffect, useState } from "react";
import styles from '../styles/wishlist.module.css';
import Button from "../components/Button";
import Catalogue from "../components/Catalogue";
import ProductCard from "../components/ProductCard";
import { getWishlist, getJustForYouProducts, addToCart } from "../api/wishlist";
import { getToken } from "../actions";
import { usePathname, useRouter } from 'next/navigation';
import HorizontalLine from "../components/HorizontalLine";
import HeadPoint from "../components/HeadPoint";
import { toast } from 'react-toastify';

export default function Wishlist() {
    const [token, setToken] = useState(null);
    const currentPath = usePathname();
    const [itemsCount, setItemsCount] = useState(0)
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const router = useRouter();

    // Redirect to a different page
    const redirectToPage = (page) => {
        router.push(page);
    };

    useEffect(() => {
        getToken().then(token => {
            if (token) {
                setToken(token) // Access token here
                getWishlist({
                    'token': token?.value
                }).then((response) => {
                    if (response.response.status == 200) {
                        setProducts(response?.data)
                        setItemsCount(response?.data.length)
                    }
                    else {
                        setProducts([])
                        setItemsCount(0)
                    }
                });
                getJustForYouProducts({
                    'token': token?.value
                }).then((response) => {
                    if (response.response.status == 200) {
                        setAllProducts(response?.data)
                    }
                    else {
                        setAllProducts([])
                    }
                });
            }
            else {
                toast.info('Please login first to add items')
                redirectToPage('/login')
            }
        });
    }, [currentPath])

    function addCart(data) {
        addToCart({
            'token': token?.value,
            'product_ids': data
        }).then((response) => {
            if (response.response.status == 200) {
                toast.success("Added To Cart!");
                getWishlist({
                    'token': token?.value
                }).then((response) => {
                    if (response.response.status == 200) {
                        setProducts(response?.data)
                        setItemsCount(response?.data.length)
                    }
                    else {
                        setProducts([])
                        setItemsCount(0)
                    }
                });
            }
            else {
                toast.error("Uh-Oh! Failed To Add!");
            }
        });
    }


    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading}>
                    <div className={styles.headingText}>
                        {'Wishlist (' + itemsCount + ')'}
                    </div>
                    <Button text={'Move All to Bag'} customCss={styles.cartBtn} onClick={(e) => {
                        e.preventDefault();
                        addCart(Object.values(products.map(item => item.id)))
                    }} />
                </div>
                <div className={styles.items}>
                    {products.length > 0 ? <Catalogue products={products} Card={ProductCard} customCss={styles.catalogue} onClickCart={addCart} /> : <div className={styles.emptyWishList}>
                        <div className={styles.orderIcon}></div>
                        <div className={styles.emptyText}>{'Your wish list is empty!'}</div>
                    </div>
                    }
                </div>
                <HorizontalLine customCss={styles.HorizontalLine} />
                <div className={styles.justProductsHeading}>
                    <HeadPoint text={'Just for you'} customCss={styles.headPoint} />
                    <Button text={'See All'} customCss={styles.cartBtn} />
                </div>
                <div className={styles.items}>
                    {allProducts.length > 0 ? <Catalogue products={allProducts} Card={ProductCard} customCss={styles.catalogue} onClickCart={addCart} /> : <div className={styles.emptyWishList}>
                        <div className={styles.orderIcon}></div>
                        <div className={styles.emptyText}>{'No Products!'}</div>
                    </div>
                    }
                </div>
            </div>
        </>
    );
}
