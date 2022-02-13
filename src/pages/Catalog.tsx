import React, {FC} from 'react';
import ProductCard from '../components/catalog/ProductCard';
import BreadcrumbsCatalog from '../components/common/breadcrumbs/BreadcrumbsCatalog';
import FilterCatalog from '../components/common/filters/FilterCatalog';

const productIds = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

/**
 * Каталог продуктов (контент между шапкой и футером)
 * @returns JSX
 */
const Catalog: FC = () => {
    document.title = "Каталог";

	return(
        
        <div className="uk-container-expand uk-padding-remove-top catalog-container">
            <div className="uk-padding-remove">
                <div className="uk-flex uk-flex-left">
                    <aside className="uk-visible@m uk-width-1-4@m uk-width-1-5@l catalog-aside">
                        <BreadcrumbsCatalog />
                        <FilterCatalog />
                    </aside>
                    <div className="uk-width-1-1 uk-width-3-4@m uk-width-4-5@l catalog-content">
                        <div 
                            className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-5@l uk-grid uk-grid-match" 
                            data-uk-grid
                        >
                            {
                                productIds.map(id => 
                                    <div key={id}>
                                        {
                                            (id === 2 || id === 6 || id === 8) ?
                                            <ProductCard sale={true} discount={1250} /> :
                                            <ProductCard />
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

export default Catalog;