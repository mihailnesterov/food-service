import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "Брэнд" в фильтре каталога
 * @returns JSX
 */
const Brands: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">Бренд</Link>
            <div className="uk-accordion-content">
                
                <div className="uk-form-controls uk-margin-bottom">
                    <div className="uk-inline">
                        <Link 
                            className="uk-form-icon uk-form-icon-flip" 
                            to="#" 
                            uk-icon="icon: search"
                        ></Link>

                        <input 
                            className="uk-input search-brend" 
                            type="text"
                            placeholder="Поиск" />

                    </div>
                </div>

                <div className="uk-form-controls">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Agazzi" 
                            defaultChecked={false} /> Agazzi <span>(4)</span>
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Ahmad-Tea" 
                            defaultChecked={true} /> Ahmad Tea <span>(40)</span>
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Akbar" 
                            defaultChecked={false} /> Akbar <span>(5)</span>
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Altaivita" 
                            defaultChecked={false} /> Altaivita <span>(2)</span>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Brands;