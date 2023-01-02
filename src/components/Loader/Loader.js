import React from 'react';
import styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.progressWrapper}>
                <div className={styles.progress}></div>
                <span className={styles.text}>{'JUST A MOMENT'}</span>
            </div>
        </div>
    );
};

export default Loader;