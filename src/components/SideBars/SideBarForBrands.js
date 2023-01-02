import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import styles from './SideBars.module.scss';


const SideBarForBrands = observer(() => {
    const { product } = useContext(Context);

    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>
                <div className={styles.labelIcon}></div>
                <p>BRANDS</p>
            </div>
            <ul className={styles.list}>
                {
                    product.brands.map((brand) => {
                        const isActive = product.selectedBrand.id === brand.id ? 'active' : null;

                        return (
                            <li key={brand.id}
                                className={`${styles.typeItem} ${styles[isActive]}`}
                                onClick={() => product.setSelectedBrand(brand)}
                            >
                                { brand.name.toUpperCase() }
                            </li>
                        );
                    })
                }
                <button type="button"
                        className={styles.resetBtn}
                        onClick={() => product.setSelectedBrand({})}
                >
                    RESET BRANDS
                </button>
            </ul>
        </div>
    );
});

export default SideBarForBrands;