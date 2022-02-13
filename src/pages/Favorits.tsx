import React, {FC} from 'react';
import ProductCard from '../components/catalog/ProductCard';
import BreadcrumbsFavorits from '../components/common/breadcrumbs/BreadcrumbsFavorits';
import FilterFavorits from '../components/common/filters/FilterFavorits';

const productIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

/**
 * Избранное (контент между шапкой и футером)
 * @returns JSX
 */
const Favorits: FC = () => {
    document.title = "Избранное";

	return(
        
        <div className="uk-container-expand uk-padding-remove-top catalog-container">
            <div className="uk-padding-remove">
                <div className="uk-flex uk-flex-left">
                    <aside className="uk-visible@m uk-width-1-4@m uk-width-1-5@l catalog-aside">
                        <BreadcrumbsFavorits />
                        <FilterFavorits />
                    </aside>
                    <div className="uk-width-1-1 uk-width-3-4@m uk-width-4-5@l catalog-content">
                        <header>
                            <h1>Избранное <small>10 товаров</small></h1>
                            <div className="uk-form-controls">
                                <div className="catalog-sort">
                                    <span data-uk-icon="arrow-up; ratio: 2"></span>
                                    <span data-uk-icon="arrow-down; ratio: 2"></span>
                                    <select className="uk-select" id="form-catalog-select">
                                        <option>По цене</option>
                                        <option>По популярности</option>
                                        <option>По бренду</option>
                                    </select>
                                </div>
                            </div>
                        </header>
                        
                        <div 
                            className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-5@l uk-grid uk-grid-match" 
                            data-uk-grid
                        >
                            {
                                productIds.map(id => 
                                    <div key={id}>
                                        {
                                            (id === 3 || id === 4 || id === 8 || id === 10) ?
                                            <ProductCard id={id} sale={true} discount={1250} favorit={true} /> :
                                            <ProductCard id={id} favorit={true} />
                                        }
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Favorits;