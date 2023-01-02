import React from 'react';
import styles from './Popup.module.scss';


const Popup = ({visible, setVisible, children}) => {
    const showWrapper = visible ? `${styles.wrapper} ${styles.wrapperVisible}` : `${styles.wrapper}`;
    const showPopup = visible ? `${styles.popupWrapper} ${styles.popupVisible}` : `${styles.popupWrapper}`;

    return (
        <div className={showWrapper}
            onClick={() => setVisible(false)}
        >
            <div className={showPopup}
                onClick={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Popup;