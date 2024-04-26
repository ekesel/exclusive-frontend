"use client";
import { useEffect, useState } from "react";
import { homepageConfig } from "./api/homepage";
import LeftCategoryBar from "./components/LeftCategoryBar";
import ImageBanner from "./components/ImageBanner";
import styles from './styles/home.module.css';
import HeadPoint from "./components/HeadPoint";
import Heading from "./components/Heading";
import Catalogue from "./components/Catalogue";
import Button from "./components/Button";
import HorizontalLine from "./components/HorizontalLine";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import Arrivals from "./components/Arrivals";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [imageBanner, setImageBanner] = useState([]);
  const [flashProducts, setFlashProducts] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);

  useEffect(()=> {
    homepageConfig({}).then((response) => {
      setCategories(response?.data?.categories)
      setImageBanner(response?.data?.image_banner)
      setFlashProducts(response?.data?.flash_products)
      setSubCategories(response?.data?.sub_categories)
      setNewArrivals(response?.data?.new_arrivals)
      setBestSellingProducts(response?.data?.best_selling_products)
    });
  }, [])

  return (
    <>
    <div className={styles.categoryBarImageContainer}>
      <LeftCategoryBar categories={categories} />
      <ImageBanner banner={imageBanner} />
    </div>
    <HeadPoint text={"Today's"} />
    <Heading text={"Flash Sales"} />
    <Catalogue products={flashProducts} Card={ProductCard} />
    <div className={styles.flashSaleButton}>
      <Button text={'View All Products'} />
    </div>
    <HorizontalLine />
    <HeadPoint text={"Categories"} />
    <Heading text={"Browse By Category"} />
    <Catalogue products={subCategories} Card={CategoryCard} />
    <HorizontalLine />
    <HeadPoint text={"This Month"} />
    <Heading text={"Best Selling Products"} />
    <Catalogue products={bestSellingProducts} Card={ProductCard} />
    <div className={styles.flashSaleButton}>
      <Button text={'View All Products'} />
    </div>
    <div className={styles.ImageContainer}>
      <ImageBanner banner={imageBanner} customcss={styles.imageBannerContainer} />
    </div>
    <HeadPoint text={"Our Products"} />
    <Heading text={"Explore Our Products"} />
    <Catalogue products={flashProducts} Card={ProductCard} />
    <div className={styles.flashSaleButton}>
      <Button text={'View All Products'} />
    </div>
    <HeadPoint text={"Featured"} />
    <Heading text={"New Arrivals"} />
    <Arrivals data={newArrivals} />
    </>
  );
}
