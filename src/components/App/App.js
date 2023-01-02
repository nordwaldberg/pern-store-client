import styles from './App.module.scss';
import AppRouter from '../AppRouter/AppRouter';
import { observer } from 'mobx-react-lite';
import NavigationBar from '../NavigationBar/NavigationBar';
import {useContext, useEffect, useState} from "react";
import {Context} from "../../index";
import {check} from "../../http/user_api";
import Loader from "../Loader/Loader";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            check().then(data => {
                user.setUser(true);
                user.setIsAuth(true);
            }).finally(() => setLoading(false));
        }, 2000)
    }, []);

    if (loading){
        return <Loader/>;
    }

    {
        return (
            <div className={styles.app}>
                <NavigationBar/>
                <AppRouter/>
            </div>
        );
    }
})

export default App;
