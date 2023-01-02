import React, {useState} from 'react';
import styles from './ToTopButton.module.scss';

const ToTopButton = () => {
    return (
        <button type="button"
                className={styles.toTopBtn}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    })
                }}
        >
            TO TOP
        </button>
    );
};

export default ToTopButton;