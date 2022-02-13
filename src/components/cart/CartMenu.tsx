import React, {FC, useCallback} from 'react';
import UIkit from 'uikit';

const modal = UIkit.modal('#modal-product-analogs');

interface ICartMenu {
    setMenuItemActive: (num: number) => void;
    setShowMore: () => void;
}

/**
 * Верхнее меню в корзине
 * @returns JSX
 */
const CartMenu: FC<ICartMenu> = (props: ICartMenu) => {
    const {setMenuItemActive, setShowMore} = props;
    
    const openModal = useCallback(() => {
        modal && modal !== undefined && modal.show();
    }, []);

	return(
        <div className="cart-menu">
            <ul className="uk-flex-center" data-uk-tab>
                <li className="uk-active">
                    <button onClick={() => {
                        setMenuItemActive(1);
                        setShowMore();
                    }}>Ваша корзина</button>
                </li>
                <li>
                    <button 
                    data-uk-toggle="target: #modal-product-analogs"
                    onClick={() => {
                        setMenuItemActive(2);
                        setShowMore();
                        openModal();
                    }}>Подобрать аналоги</button>
                </li>
            </ul>
        </div>
    );
};

export default CartMenu;