import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "Показывать по моим магазинам" в фильтре избаранного
 * @returns JSX
 */
const ShowMyShops: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">Показывать</Link>
            <div className="uk-accordion-content">
                <div className="uk-form-controls">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-my-shops" 
                            defaultChecked={true} /> По моим магазинам
                    </label>
                </div>
            </div>
        </>
    );
};

export default ShowMyShops;