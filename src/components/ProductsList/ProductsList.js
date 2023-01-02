import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import styles from './ProductsList.module.scss';
import ProductListItem from '../ProductListItem/ProductListItem';


const ProductsList = observer(() => {
    const {product} = useContext(Context);

    return (
        <div className={styles.wrapper}>
            {
                product.productItems.length === 0
                    ? <div className={styles.text}>{'Oops! We don\'t have those guitars yet! 😿'}</div>
                    : (
                        product.productItems.map((item) => {
                            return (
                                <ProductListItem key={item.id} item={item}/>
                            );
                        })
                    )

            }
        </div>
    );
});

export default ProductsList;