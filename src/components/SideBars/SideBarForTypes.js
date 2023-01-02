import React, {useContext} from 'react';
import {observer} from 'mobx-react-lite';
import {Context} from '../../index';
import styles from './SideBars.module.scss';


const SideBarForTypes = observer(() => {
    const {product} = useContext(Context);

    return (
        <div className={styles.wrapper}>
            <div className={styles.label}>
                <div className={styles.labelIcon}></div>
                <p>TYPES</p>
            </div>
            <ul className={styles.list}>
                {
                    product.types.map((type) => {
                        const isActive = product.selectedType.id === type.id ? 'active' : null;

                        return (
                            <li key={type.id}
                                className={`${styles.typeItem} ${styles[isActive]}`}
                                onClick={() => product.setSelectedType(type)}
                            >
                                {type.name.toUpperCase()}
                            </li>
                        );
                    })
                }
                <button type="button"
                        className={styles.resetBtn}
                        onClick={() => product.setSelectedType({})}
                >
                    RESET TYPES
                </button>
            </ul>
        </div>
    );
});

export default SideBarForTypes;