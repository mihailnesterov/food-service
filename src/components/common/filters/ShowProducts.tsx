import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "Показывать товары" в фильтре каталога
 * @returns JSX
 */
const ShowProducts: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">Показывать товары</Link>
            <div className="uk-accordion-content">
                <div className="uk-form-controls">
                    <label><input className="uk-radio" type="radio" name="radio1" defaultChecked={true} /> Везде</label>
                    <label><input className="uk-radio" type="radio" name="radio1" /> В избранных магазинах</label>
                    <label><input className="uk-radio" type="radio" name="radio1" /> В магазинах рядом</label>
                </div>
            </div>
        </>
    );
};

export default ShowProducts;