import React, {FC} from 'react';

interface IProductMenu {
    setProductMenuItemActive: (num: number) => void;
}

/**
 * Меню товаров в профиле продавца
 * @returns JSX
 */
const ProductMenu: FC<IProductMenu> = (props: IProductMenu) => {
    
    const {setProductMenuItemActive} = props;

	return(
        <div className="product-menu">
            <ul className="uk-flex-center" data-uk-tab>
                <li className="uk-active">
                    <button onClick={() => {
                        setProductMenuItemActive(1);
                    }}>Все товары</button>
                </li>
                <li>
                    <button 
                    onClick={() => {
                        setProductMenuItemActive(2);
                    }}>Каталог магазина</button>
                </li>
            </ul>
        </div>
    );
};

export default ProductMenu;