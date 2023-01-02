import React, {useEffect, useState} from 'react';
import styles from './ProductPage.module.scss';
import RatingBar from '../../components/RatingBar/RatingBar';
import {useParams} from "react-router-dom";
import {fetchProduct} from "../../http/product_api";


const ProductPage = () => {
    const [product, setProduct] = useState({ info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchProduct(id).then(data => setProduct(data));
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h3 className={styles.title}>{product.name}</h3>
                <RatingBar rating={product.rating} fontSize={'35px'} />
            </div>
            <div className={styles.imgAndPanelWrapper}>
                <div className={styles.imgWrapper}>
                    <img src={process.env.REACT_APP_API_URL + product.img}
                         alt={product.name}
                         className={styles.image}
                    />
                </div>
                <div className={styles.addToBasketPanel}>
                    <ul className={styles.infoList}>
                        { product.info.map((item) => {
                            return (
                                <li key={item.id}
                                    className={styles.infoItem}
                                >
                                    <span className={styles.infoItemTitle}>{item.title.toUpperCase() + ' :'}</span>
                                    <span className={styles.infoItemDescription}>{item.description}</span>
                                </li>
                            );
                        })}
                        <span className={styles.price}>{product.price + ' €'}</span>
                    </ul>
                        <button className={styles.addBtn}>{'ADD TO BASKET'}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;