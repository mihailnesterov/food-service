import React, {FC, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Account from './Account';
import CatalogButton from './CatalogButton';
import CatalogMenu from './CatalogMenu';
import Search from './Search';

const PriceProduct: FC = () => {

    const [isMenuOpen, setMenuOpen] = useState<boolean | null>(false);
    
	return(
        <div className="price-product uk-flex uk-flex-middle uk-flex-between uk-flex-nowrap">
            <div className="uk-width-1-5 uk-width-1-6@l">
                <h1><Link to="/">Price Product</Link></h1>
            </div>
            <div className="uk-flex uk-flex-middle uk-flex-between">
                <CatalogButton isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
            </div>
            <div className="uk-width-expand">
                <Search />
            </div>
            <div className="uk-flex uk-flex-middle uk-flex-between">
                <Account />
            </div>

            {isMenuOpen && <CatalogMenu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />}
            
        </div>
    );
};

export default PriceProduct;