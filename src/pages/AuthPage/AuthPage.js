import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './AuthPage.module.scss';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {SHOP_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE} from '../../utils/route-constants';
import { signIn, signUp } from '../../http/user_api';
import { Context } from '../../index';


const AuthPage = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const isSignInURL = location.pathname === SIGNIN_ROUTE;

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const showPassword = (passwordVisible) => {
        setPasswordVisible(!passwordVisible);
    }

    const authClick = async () => {
        try {
            let userData;
            if (isSignInURL) {
                userData = await signIn(email, password);
            } else {
                userData = await signUp(email, password);
            }

            user.setUser(user);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (err) {
            alert(err.response.data.message);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <form className={styles.form}>
                    <h3 className={styles.formTitle}>{ isSignInURL ? 'SIGN IN' : 'SIGN UP' }</h3>
                    <div className={styles.formInputsColumn}>
                        <input
                            placeholder="EMAIL"
                            type="text"
                            className={styles.formInput}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <input
                            placeholder="PASSWORD"
                            type={passwordVisible ? 'text' : 'password'}
                            className={styles.formInput}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button className={styles.formSubmitBtn}
                                onClick={authClick}
                                type={'button'}
                        >
                            { isSignInURL ? 'SIGN IN' : 'SIGN UP' }
                        </button>
                        <div className={styles.checkboxWrapper}>
                            <input type="checkbox"
                                   onClick={() => showPassword(passwordVisible)}
                            />
                            <p>SHOW PASSWORD</p>
                        </div>
                    </div>
                    <div className={styles.changeForm}>
                        {isSignInURL ? (
                            <>
                                <p>Don't have an account yet?</p>
                                <NavLink to={SIGNUP_ROUTE}>SIGN UP</NavLink>
                            </>
                        ) : (
                            <>
                                <p>Already have an account?</p>
                                <NavLink to={SIGNIN_ROUTE}>SIGN IN</NavLink>
                            </>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
});

export default AuthPage;