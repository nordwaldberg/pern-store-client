import React from 'react';
import styles from './RatingBar.module.scss';


const RatingBar = ({rating, fontSize}) => {
    const ratingPercentsForWidth = rating / 0.05;

    return (
        <div className={styles.ratingBar} style={{ fontSize: fontSize }}>
            <div className={styles.stars}>
                <div className={styles.starline}
                     style={
                         {width: `${ratingPercentsForWidth}%`}
                     }
                ></div>
            </div>
            <span className={styles.ratingValue}>{rating}</span>
        </div>
    );
};

export default RatingBar;