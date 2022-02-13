import React, {FC, useState, useEffect} from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';
import BreadcrumbsCart from '../components/common/breadcrumbs/BreadcrumbsCart';
import FilterCart from '../components/common/filters/FilterCart';
import ShopOffers from '../components/cart/ShopOffers';
import ShopBestPrices from '../components/cart/ShopBestPrices';
import CartPriceInShop from '../components/cart/CartPriceInShop';
import CartMenu from '../components/cart/CartMenu';
import ShopCartTable from '../components/cart/ShopCartTable';

/**
 * Корзина товаров
 * @returns JSX
 */
const Cart: FC = () => {
    document.title = "Корзина товаров";
    // store
    const {cart, error, loading} = useTypedSelector(state => state.cart);
    // action-creators
    const {fetchCart} = useActions();
    // local state
    const [cartData, setCartData] = useState<number>(0);
    useEffect(() => {
        setCartData(cart);
    }, [cart]);

    const [menuItemActive, setMenuItemActive] = useState<number>(1);
    const [showMore, setShowMore] = useState<boolean>(false);

	return(
        
        <div className="uk-container-expand uk-padding-remove-top catalog-container">
            <div className="uk-padding-remove">
                <div className="uk-flex uk-flex-left cart">
                    
                    <aside className="uk-visible@m uk-width-1-4@m uk-width-1-5@l">
                        <div className="catalog-aside">
                            <BreadcrumbsCart />
                            <FilterCart />
                        </div>
                    </aside>
                    
                    <div className="uk-width-1-1 uk-width-3-4@m uk-width-4-5@l">
                        <div className="catalog-content">
                            <CartMenu 
                                setMenuItemActive={setMenuItemActive}
                                setShowMore={() => setShowMore(false)}
                            />

                            <div className="uk-grid" data-uk-grid>
                                <div className="uk-width-1-1 uk-width-2-5@m uk-width-1-4@l">
                                    <ShopOffers setShowMore={() => setShowMore(true)} />
                                </div>
                                {
                                    !showMore && menuItemActive === 1 &&
                                    <div className="uk-width-1-1 uk-width-3-5@m uk-width-3-4@l">
                                        <ShopBestPrices />
                                    </div>
                                }
                                {
                                    !showMore && menuItemActive === 2 &&
                                    <div className="uk-width-1-1 uk-width-3-5@m uk-width-3-4@l">
                                        <CartPriceInShop />
                                    </div>
                                }
                                {
                                    showMore && menuItemActive === 1 &&
                                    <div className="uk-width-1-1 uk-width-3-5@m uk-width-3-4@l">
                                        <ShopCartTable />
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;