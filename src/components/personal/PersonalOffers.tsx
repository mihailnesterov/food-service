import React, {FC, useState} from 'react';
import Offer from './offers/Offer';

/**
 * Блок "Персональные предложения" в профиле пользователя
 * @returns JSX
 */
const PersonalOffers: FC = () => {

    document.title = "Персональные предложения";

    const [offers, setOffers] = useState<any | null>([1,2,3,4,5]); // список предложений

	return( // цикл по персональным предложениям
        offers && offers.length > 0 &&
        offers.map((offerId: any) => 
            <div key={offerId}>
                <Offer 
                    id={offerId} 
                    sale={true} 
                    price={1990} 
                    discount={1440} 
                    favorit={false} 
                    shop={<img src="./img/shops/lenta.png" alt="Лента" />}
                /> 
            </div>
        )
    );
};

export default PersonalOffers;