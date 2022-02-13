import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Catalog from '../pages/Catalog';
import Favorits from '../pages/Favorits';
import Product from '../pages/Product';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Personal from '../pages/Personal';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Error404 from '../pages/Error404';

export interface IRoute {
    path: string;   // путь до компонента
    component: React.ComponentType; // компонент
    exact?: boolean;    // идентификация маршрута
    title?: string;    // заголовок страницы
}

// названия маршрутов
export enum RouteNames {
    LOGIN = '/login',
    HOME = '/',
    CATALOG = '/catalog',
    FAVORITS = '/favorits',
    PRODUCT = '/product',
    CART = '/cart',
    PROFILE = '/profile',
    PERSONAL = '/personal',
    SHOP = '/shop',
    ERROR404 = '/404',
    ABOUT = '/about'
}

// маршруты для неавторизованных
export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, component: Home, exact: true, title: "Главная"},
    {path: RouteNames.ABOUT, component: About, exact: true, title: "О сайте"},
    {path: RouteNames.ERROR404, component: Error404, exact: true, title: "404 ошибка"},
    {path: RouteNames.LOGIN, component: Login, exact: true, title: "Авторизация"},
    {path: RouteNames.CATALOG, component: Catalog, exact: true, title: "Каталог"},
    {path: RouteNames.FAVORITS, component: Favorits, exact: true, title: "Избранное"},
    {path: RouteNames.PRODUCT, component: Product, exact: true, title: "Товар"},
    {path: RouteNames.CART, component: Cart, exact: true, title: "Корзина"},
    {path: RouteNames.PERSONAL, component: Personal, exact: true, title: "Профиль пользователя"},
    {path: RouteNames.PROFILE, component: Profile, exact: true, title: "Профиль магазина"},
    {path: RouteNames.SHOP, component: Shop, exact: true, title: "Магазин"},
];

// маршруты для авторизованных
export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, component: Home, exact: true, title: "Главная"},
    {path: RouteNames.ABOUT, component: About, exact: true, title: "О сайте"},
    {path: RouteNames.ERROR404, component: Error404, exact: true, title: "404 ошибка"},
    {path: RouteNames.CATALOG, component: Catalog, exact: true, title: "Каталог"},
    {path: RouteNames.FAVORITS, component: Favorits, exact: true, title: "Избранное"},
    {path: RouteNames.PRODUCT, component: Product, exact: true, title: "Товар"},
    {path: RouteNames.CART, component: Cart, exact: true, title: "Корзина"},
    {path: RouteNames.PERSONAL, component: Personal, exact: true, title: "Профиль пользователя"},
    {path: RouteNames.PROFILE, component: Profile, exact: true, title: "Профиль магазина"},
    {path: RouteNames.SHOP, component: Shop, exact: true, title: "Магазин"},
];