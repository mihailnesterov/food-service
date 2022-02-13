import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Меню каталога (открывается по кнопке "Каталог")
 * @returns JSX
 */
const CatalogMenu: FC<any> = (props : any) => {
    const {isMenuOpen, setMenuOpen} = props;
	return(
        <div className="catalog-menu" onClick={() => setMenuOpen(!isMenuOpen)} >
            <div className="uk-flex uk-flex-top uk-flex-between uk-flex-nowrap">
                <div>
                    <h3>
                        <Link to="/catalog">Сейчас актуально</Link>
                    </h3>
                    <div className="uk-flex uk-flex-top uk-flex-nowrap">
                        <ul className="uk-list uk-padding-small uk-padding-remove-left uk-padding-remove-vertical">
                            <li><Link to="/catalog" style={{color: "#43B727"}}>Скидки</Link></li>
                            <li><Link to="/catalog">Чай, кофе, сахар</Link></li>
                            <li><Link to="/catalog">Товары для школы и офиса</Link></li>
                            <li><Link to="/catalog">Соусы, орехи, консервы</Link></li>
                            <li><Link to="/catalog">Дача и гриль</Link></li>
                            <li><Link to="/catalog">Хлеб, сладости, снеки</Link></li>
                            <li><Link to="/catalog">Овощи, фрукы, ягоды</Link></li>
                            <li><Link to="/catalog">Макароны, крупы, специи</Link></li>
                            <li><Link to="/catalog">Подборки, ЗОЖ и готовые блюда</Link></li>
                        </ul>
                        <ul className="uk-list uk-padding-small uk-padding-remove-left uk-padding-remove-vertical" style={{marginTop: "0"}}>
                            <li><Link to="/catalog">Подборки, ЗОЖ и готовые блюда</Link></li>
                            <li><Link to="/catalog">Птица, мясо, деликатесы</Link></li>
                            <li><Link to="/catalog">Замороженные продукты</Link></li>
                            <li><Link to="/catalog">Молоко, сыр, яйца</Link></li>
                            <li><Link to="/catalog">Товары для мам и детей</Link></li>
                            <li><Link to="/catalog">Молоко, сыр, яйца</Link></li>
                            <li><Link to="/catalog">Товары для дома и дачи</Link></li>
                            <li><Link to="/catalog">Воды, соки, напитки</Link></li>
                            <li><Link to="/catalog">Зоотовары</Link></li>
                        
                        </ul>
                    </div>
                </div>
                <div>
                    <h3>
                        <Link to="/catalog">Сезонные ягоды, фрукты и овощи</Link>
                    </h3>
                    <h3 style={{marginTop: "0"}}>
                        <Link to="/catalog">Все для легких салатов</Link>
                    </h3>
                    
                    <ul className="uk-list uk-padding-small uk-padding-remove-left uk-padding-remove-vertical" style={{marginTop: "-10px"}}>
                        <li><Link to="/catalog">Овощи, фрукты, зелень</Link></li>
                        <li><Link to="/catalog">Орехи и семечки</Link></li>
                        <li><Link to="/catalog">Курица, индейка</Link></li>
                        <li><Link to="/catalog">Морепродукты</Link></li>
                        <li><Link to="/catalog">Яйца</Link></li>
                        <li><Link to="/catalog">Масло и соусы</Link></li>
                        <li><Link to="/catalog">Посуда</Link></li>
                        <li><Link to="/catalog">Рецепты летних салатов</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>
                        <Link to="/catalog">Освежающие напитки</Link>
                    </h3>
                    <h3 style={{marginTop: "0"}}>
                        <Link to="/catalog">Средства для загара</Link>
                    </h3>
                    <h3 style={{marginTop: "0"}}>
                        <Link to="/catalog">Все для смузи и соков</Link>
                    </h3>
                    <ul className="uk-list uk-padding-small uk-padding-remove-left uk-padding-remove-vertical" style={{marginTop: "0"}}>
                        <li><Link to="/catalog">Фрукты и овощи</Link></li>
                        <li><Link to="/catalog">Ягоды</Link></li>
                        <li><Link to="/catalog">Молоко, йогурты, соки</Link></li>
                        <li><Link to="/catalog">Посуда, блендеры и соковыжималки</Link></li>
                    </ul>
                    <h3 style={{marginTop: "0"}}>
                        <Link to="/catalog">Популярные диеты</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CatalogMenu;