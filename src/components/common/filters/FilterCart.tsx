import React, {FC} from 'react';
import OffersCloseToMe from './OffersCloseToMe';
import Shops from './Shops';

/**
 * Фильтр в корзине (aside слева)
 * @returns JSX
 */
const FilterCart: FC = () => {

	return(
        <section className="filter-catalog">
            <h3>Фильтр</h3>
            <ul data-uk-accordion>
                <li className="uk-open">
                    <OffersCloseToMe />
                </li>
                <li className="uk-open">
                    <Shops />
                </li>
            </ul>
        </section>
    );
};

export default FilterCart;