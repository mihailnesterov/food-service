import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "В наличии" в фильтре каталога
 * @returns JSX
 */
const InStock: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">В наличии</Link>
            <div className="uk-accordion-content">
                <div className="uk-form-controls">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-instock" 
                            defaultChecked={true} /> Да
                    </label>
                </div>
            </div>
        </>
    );
};

export default InStock;