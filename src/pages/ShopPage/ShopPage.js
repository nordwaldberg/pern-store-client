import React, {useContext, useEffect} from 'react';
import SideBarForTypes from '../../components/SideBars/SideBarForTypes';
import SideBarForBrands from '../../components/SideBars/SideBarForBrands';
import ProductsList from '../../components/ProductsList/ProductsList';
import styles from './ShopPage.module.scss';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchBrands, fetchProducts, fetchTypes} from "../../http/product_api";
import Pagination from "../../components/Pagination/Pagination";
import ToTopButton from "../../components/ToTopButton/ToTopButton";


const ShopPage = observer(() => {
    const { product } = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data));
        fetchBrands().then(data => product.setBrands(data));
        fetchProducts(null, null, 2, 9).then(data => {
            product.setProductItems(data.rows);
            product.setCountOfSuitableProducts(data.count);
            product.setLimit(data.rows.length);
        });
    }, []);

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedBrand.id, product.page, 9).then(data => {
            product.setProductItems(data.rows);
            product.setCountOfSuitableProducts(data.count);
        });
    }, [product.page, product.selectedType, product.selectedBrand]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <SideBarForTypes/>
                <SideBarForBrands/>
            </div>
            <div className={styles.list}>
                <ProductsList/>
                <Pagination/>
            </div>
            <ToTopButton/>
        </div>
    );
});

export default ShopPage;