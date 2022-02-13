import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "Предложения рядом с вами" в фильтре корзины
 * @returns JSX
 */
const OffersCloseToMe: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">Показать</Link>
            <div className="uk-accordion-content">
                <div className="uk-form-controls">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-instock" 
                            defaultChecked={true} /> Предложения рядом с вами
                    </label>
                </div>
            </div>
        </>
    );
};

export default OffersCloseToMe;