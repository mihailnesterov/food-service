import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

/**
 * Покупка в списке истории покупок в профиле пользователя
 * @returns JSX
 */
const Purchase: FC<any> = (props: any) => {

    const {purchaseNum} = props; // № покупки в истории покупок

	return(
        <div className="purchase-item">
            <h4>Заказ №{purchaseNum}</h4>
            <div>
                <p>Дата:</p>
                <p>21.08.2021</p>
            </div>
            <div>
                <p>Кол-во товаров:</p>
                <p>6</p>
            </div>
            <div>
                <p>Магазин:</p>
                <Link to="/profile"><img src="./img/shops/lenta.png" alt="Лента" /></Link>
            </div>
            <div>
                <p>Стоимость корзины:</p>
                <p><span>1316</span> <span>₽</span></p>
            </div>
            <div>
                <Button 
                    type="button"
                    classlist={"uk-button uk-button-primary"}
                    onClick={() => console.log("Смотреть покупку")}
                    text="Смотреть"
                />
                <Button 
                    type="button"
                    classlist={"uk-button uk-button-primary"}
                    onClick={() => console.log("Повторить покупку")}
                    text="Повторить"
                />
            </div>
        </div>
    );
};

export default Purchase;