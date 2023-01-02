import React, {useContext} from 'react';
import styles from './Pagination.module.scss';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Pagination = observer(() => {
    const { product } = useContext(Context);

    const pagesCount = Math.ceil(product.countOfSuitableProducts/product.limit);
    const pages = [];

    for ( let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
    }

    return (
        <div className={styles.wrapper}>
            {pages.map((page, index) => {
                const isActivePage = product.page === page;

                return (
                    <button key={index}
                            type="button"
                            className={isActivePage
                                ? `${styles.paginationItem} ${styles.paginationItemActive}`
                                : `${styles.paginationItem}`}
                            onClick={() => product.setPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
});

export default Pagination;