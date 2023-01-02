import React, { useState } from 'react';
import styles from './AdminPanel.module.scss';
import CreateProduct from '../../components/popups/CreateProduct/CreateProduct';
import CreateType from '../../components/popups/CreateType/CreateType';
import CreateBrand from '../../components/popups/CreateBrand/CreateBrand';


const AdminPanel = () => {
    const [createProductsVisible, setCreateProductsVisible] = useState(false);
    const [createTypesVisible, setCreateTypesVisible] = useState(false);
    const [createBrandsVisible, setCreateBrandsVisible] = useState(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.controls}>
                <div className={styles.title}>
                    <div className={styles.line}></div>
                    <h3>{'PRODUCTS'}</h3>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}
                            onClick={() => setCreateProductsVisible(true)}
                    >
                        {'CREATE NEW PRODUCT'}
                    </button>
                    <button className={styles.btn}>{'EDIT PRODUCT'}</button>
                    <button className={styles.btn}>{'DELETE PRODUCT'}</button>
                </div>
            </div>
            <div className={styles.controls}>
                <div className={styles.title}>
                    <div className={styles.line}></div>
                    <h3>{'TYPES'}</h3>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}
                            onClick={() => setCreateTypesVisible(true)}
                    >
                        {'CREATE NEW TYPE'}
                    </button>
                    <button className={styles.btn}>{'EDIT TYPE'}</button>
                    <button className={styles.btn}>{'DELETE TYPE'}</button>
                </div>
            </div>
            <div className={styles.controls}>
                <div className={styles.title}>
                    <div className={styles.line}></div>
                    <h3>{'BRANDS'}</h3>
                </div>
                <div className={styles.buttons}>
                    <button className={styles.btn}
                            onClick={() => setCreateBrandsVisible(true)}
                    >
                        {'CREATE NEW BRAND'}
                    </button>
                    <button className={styles.btn}>{'EDIT BRAND'}</button>
                    <button className={styles.btn}>{'DELETE BRAND'}</button>
                </div>
            </div>
            <CreateProduct
                visible={createProductsVisible}
                setVisible={setCreateProductsVisible}
            />
            <CreateType
                visible={createTypesVisible}
                setVisible={setCreateTypesVisible}
            />
            <CreateBrand
                visible={createBrandsVisible}
                setVisible={setCreateBrandsVisible}
            />
        </div>
    );
};

export default AdminPanel;