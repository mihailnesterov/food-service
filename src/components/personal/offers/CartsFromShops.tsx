import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';

/**
 * Корзины от магазинов
 * @returns JSX 
 */
const CartsFromShops: FC = () => {

	return(
        <div className="carts-from-shops">
            <div>
                <h4>Корзина от магазина</h4>
                <div>
                    <div>
                        <h5>Состав:</h5>
                        <p>Яйца, Майонез, Картошка, Горошек, Морковь, Колбаса докторская</p>
                    </div>
                    <div>
                        <h5>Магазин:</h5>
                        <Link to="/profile"><img src="./img/shops/lenta.png" alt="Лента" /></Link>
                    </div>
                    <div>
                        <h5>Цена:</h5>
                        <p><span>1316</span> <span>₽</span></p>
                    </div>
                    <Button 
                        type="button"
                        classlist={"uk-button uk-button-primary"}
                        onClick={() => console.log("Смотреть корзину от магазина")}
                        text="Смотреть"
                    />
                </div>
                
            </div>
            <div>
                <h4>Корзина от магазина</h4>
                <div>
                    <div>
                        <h5>Состав:</h5>
                        <p>Яйца, Майонез, Картошка, Горошек, Морковь, Колбаса докторская</p>
                    </div>
                    <div>
                        <h5>Магазин:</h5>
                        <Link to="/profile"><img src="./img/shops/lenta.png" alt="Лента" /></Link>
                    </div>
                    <div>
                        <h5>Цена:</h5>
                        <p><span>1316</span> <span>₽</span></p>
                    </div>
                    <Button 
                        type="button"
                        classlist={"uk-button uk-button-primary"}
                        onClick={() => console.log("Смотреть корзину от магазина")}
                        text="Смотреть"
                    />
                </div>
                
            </div>
        </div>
    );
};

export default CartsFromShops;