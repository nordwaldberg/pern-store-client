import React, { useContext } from 'react';
import { Context } from '../../index';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SHOP_ROUTE } from '../../utils/route-constants';
import { authRoutes, publicRoutes } from '../../utils/routes';
import { observer } from 'mobx-react-lite';


const AppRouter = observer(() => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {
                user.isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
            <Route path='*' element={
                <Navigate to={SHOP_ROUTE}/>
            }/>
        </Routes>
    );
});

export default AppRouter;