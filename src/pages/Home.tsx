import React, {FC} from 'react';
import AboutService from '../components/common/AboutService';
import DiscountProductCart from '../components/common/DiscountProductCart';
import HowItWorks from '../components/common/HowItWorks';
import News from '../components/common/News';
import ShopsSlider from '../components/common/ShopsSlider';
import Slider from '../components/common/Slider';

/**
 * Главная страница (контент между шапкой и футером)
 * @returns JSX
 */
const Home: FC = () => {
    document.title = "Главная страница";
	return(
        
        <div className="uk-container-expand">
            
            <Slider />

            <div className="uk-container">
                <DiscountProductCart />
                <AboutService />
                <HowItWorks />
                <ShopsSlider />
                <News />
            </div>
            
        </div>
    );
};

export default Home;