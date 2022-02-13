import React, {FC} from 'react';
import Brands from './Brands';
import ShowMyShops from './ShowMyShops';
import Rates from './Rates';
import Category from './Category';

/**
 * Фильтр в избранном (aside слева)
 * @returns JSX
 */
const FilterFavorits: FC = () => {

	return(
        <section className="filter-catalog">
            <h3>Фильтр</h3>
            <ul data-uk-accordion>
                <li className="uk-open">
                    <Category />
                </li>
                <li className="uk-open">
                    <ShowMyShops />
                </li>
                <li className="uk-open">
                    <Rates />
                </li>
                <li className="uk-open">
                    <Brands />
                </li>
            </ul>
        </section>
    );
};

export default FilterFavorits;