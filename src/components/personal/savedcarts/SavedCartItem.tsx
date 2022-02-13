import React, {FC, useState} from 'react';

/**
 * Товар в сохраненной корзине (элемент списка) в профиле пользователя
 * !!! не используется, вынести сюда tr из таблицы saved-cart
 * @returns JSX
 */
const SavedCartItem: FC = () => {

    const [savedCartItem, setSavedCartItem] = useState<any | null>(null); // товар

	return(
        <div className="saved-cart__item">
            ----
        </div>
    );
};

export default SavedCartItem;