import React, {FC, useState} from 'react';
import SavedCart from './savedcarts/SavedCart';

/**
 * Блок с сохраненными корзинами в профиле пользователя
 * @returns JSX
 */
const PersonalSavedCarts: FC = () => {

    document.title = "Сохраненные корзины";

    const [savedCarts, setSavedCarts] = useState<any | null>([1,2,3]); // список корзин

	return( // цикл по сохраненным корзинам
            savedCarts && savedCarts.length > 0 &&
            savedCarts.map((cartId: any) => <SavedCart key={cartId} cartId={cartId} />)
    );
};

export default PersonalSavedCarts;