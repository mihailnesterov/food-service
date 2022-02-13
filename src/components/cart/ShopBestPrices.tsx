import React, {FC} from 'react';
import ShopInfo from './ShopInfo';
import ShopOffersTable from './ShopOffersTable';

/**
 * Блок "Лучшие цены на ваши товары в магазинах" в корзине
 * @returns JSX
 */
const ShopBestPrices: FC = () => {
	return(
        <div className="cart-shops-best-price"  data-uk-grid>
            <div className="uk-width-1-1 uk-width-3-5@m  uk-width-2-3@l">
                <ShopOffersTable />
            </div>
            <div className="uk-width-1-1 uk-width-2-5@m  uk-width-1-3@l">
                <ShopInfo />
            </div>
        </div>
    );
};

export default ShopBestPrices;