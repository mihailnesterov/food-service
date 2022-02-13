import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import GoldStar from '../stars/GoldStar';
import SilverStar from '../stars/SilverStar';

/**
 * Болок "Рейтинги" в фильтре каталога
 * @returns JSX
 */
const Rates: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">Рейтинг</Link>
            <div className="uk-accordion-content">
                <div className="uk-form-controls rating">
                    <label>
                        <input className="uk-radio" type="radio" name="radio-rating-1" defaultChecked={true} /> От
                        <GoldStar />
                        <GoldStar />
                        <GoldStar />
                        <GoldStar />
                        <SilverStar />
                        <span>(150)</span>
                    </label>
                    <label>
                        <input className="uk-radio" type="radio" name="radio-rating-1" /> От
                        <GoldStar />
                        <GoldStar />
                        <GoldStar />
                        <SilverStar />
                        <SilverStar />
                        <span>(734)</span>
                    </label>
                    <label>
                        <input className="uk-radio" type="radio" name="radio-rating-1" /> От
                        <GoldStar />
                        <GoldStar />
                        <SilverStar />
                        <SilverStar />
                        <SilverStar />
                        <span>(786)</span>
                    </label>
                    <label>
                        <input className="uk-radio" type="radio" name="radio-rating-1" /> Любой
                    </label>
                </div>
            </div>
        </>
    );
};

export default Rates;