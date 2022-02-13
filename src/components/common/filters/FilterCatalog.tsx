import React, {FC} from 'react';
import Brands from './Brands';
import Discounts from './Discounts';
import GroupsProducts from './GroupsProducts';
import InStock from './InStock';
import Rates from './Rates';
import ShowProducts from './ShowProducts';


/**
 * Фильтр в каталоге (aside слева)
 * @returns JSX
 */
const FilterCatalog: FC = () => {

	return(
        <section className="filter-catalog">
            <h3>Фильтр</h3>
            <ul data-uk-accordion>
                <li className="uk-open">
                    <ShowProducts />
                </li>
                <li className="uk-open">
                    <GroupsProducts />
                </li>
                <li className="uk-open">
                    <InStock />
                </li>
                <li className="uk-open">
                    <Discounts />
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

export default FilterCatalog;