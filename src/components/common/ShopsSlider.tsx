import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Блок со слайдером "Магазины" на главной странице
 * @returns JSX
 */
const ShopsSlider: FC = () => {
	return(
        <div className="uk-margin">
            
            <div className="shop-slider uk-flex uk-flex-nowrap uk-flex-wrap@m uk-flex-medium uk-flex-between uk-text-center">
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-1.png"} alt="Магазин 1" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-2.png"} alt="Магазин 2" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-3.png"} alt="Магазин 3" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-4.png"} alt="Магазин 4" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-5.png"} alt="Магазин 5" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-6.png"} alt="Магазин 6" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-7.png"} alt="Магазин 7" />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <img src={"./img/shops/shop-8.png"} alt="Магазин 8" />
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default ShopsSlider;