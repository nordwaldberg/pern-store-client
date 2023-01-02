import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './NavigationBar.module.scss';
import { Context } from '../../index';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, SHOP_ROUTE, SIGNIN_ROUTE } from '../../utils/route-constants';


const NavigationBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const signOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(SHOP_ROUTE);
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.navLinks}>
                <NavLink className={styles.logo} to={SHOP_ROUTE}>GUITAR SHOP</NavLink>
                <NavLink className={styles.link} to={BASKET_ROUTE}>BASKET</NavLink>
            </div>
            <div className={styles.navButtons}>
                <div className={styles.adaptiveBtn}>
                    {user.isAuth ? (
                        <button
                            className={styles.navButton}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            ADMIN PANEL
                        </button> ) : null}
                </div>
                <div className={styles.adaptiveBtn}>
                    <button
                        className={styles.navButton}
                        onClick={() => {
                            if (!user.isAuth) {
                                navigate(SIGNIN_ROUTE)
                            } else {
                                signOut();
                            }
                        }}
                    >
                        {user.isAuth ? 'SIGN OUT' : 'SIGN IN'}
                    </button>
                </div>
            </div>
        </div>
    );
});

export default NavigationBar;