import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "Скидки" в фильтре каталога
 * @returns JSX
 */
const Discounts: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">Скидки</Link>
            <div className="uk-accordion-content">
                <div className="uk-form-controls">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-discount" 
                            defaultChecked={true} /> Отображать только со скидкой
                    </label>
                </div>
            </div>
        </>
    );
};

export default Discounts;