import { ADMIN_ROUTE, BASKET_ROUTE, PRODUCT_ROUTE, SHOP_ROUTE, SIGNIN_ROUTE, SIGNUP_ROUTE } from './route-constants';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import BasketPage from '../pages/BasketPage/BasketPage';
import ShopPage from '../pages/ShopPage/ShopPage';
import AuthPage from '../pages/AuthPage/AuthPage';
import ProductPage from '../pages/ProductPage/ProductPage';


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanel
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: ShopPage
    },
    {
        path: SIGNIN_ROUTE,
        Component: AuthPage
    },
    {
        path: SIGNUP_ROUTE,
        Component: AuthPage
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
]