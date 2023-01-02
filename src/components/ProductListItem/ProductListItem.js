import React from 'react';
import styles from './ProductListItem.module.scss';
import { useNavigate } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../utils/route-constants';
import RatingBar from '../RatingBar/RatingBar';


const ProductListItem = ({item}) => {
    const navigate = useNavigate()
    const brand = item.name.split(' ')[0];
    const model = item.name.split(' ').slice(1).join(' ');

    return (
        <div className={styles.card}
            onClick={() => navigate(PRODUCT_ROUTE + '/' + item.id)}
        >
            <div className={styles.imageWrapper}>
                <img src={process.env.REACT_APP_API_URL + item.img}
                     alt={item.name}
                     className={styles.image}
                />
            </div>
            <div className={styles.info}>
                <div>
                    <div className={styles.title}>
                        <span className={styles.titleBrand}>{brand}</span>
                        <span className={styles.titleModel}>{model}</span>
                    </div>
                    <RatingBar rating={item.rating} fontSize={'25px'}/>
                </div>
                <span className={styles.price}>{item.price + ' €'}</span>
            </div>
        </div>
    );
};

export default ProductListItem;