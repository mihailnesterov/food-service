import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "Категория" в фильтре избранного
 * @returns JSX
 */
const Category: FC = () => {

    const [categorySelected, setCategorySelected] = useState<number | null>(null);
	return(
        <>
            <Link className="uk-accordion-title" to="#">Категория</Link>
                <div className="uk-accordion-content">
                    <ul className="uk-nav uk-nav-default">
                        <li 
                            onClick={() => setCategorySelected(1)} 
                            className={categorySelected && categorySelected === 1 ? "uk-active" : ""
                        }>
                                <Link to="#">Товары для школы и офиса</Link>
                        </li>
                        <li 
                            onClick={() => setCategorySelected(2)} 
                            className={categorySelected && categorySelected === 2 ? "uk-active" : ""
                        }>
                            <Link to="#">Дача и гриль</Link>
                        </li>
                        <li 
                            onClick={() => setCategorySelected(3)} 
                            className={categorySelected && categorySelected === 3 ? "uk-active" : ""
                        }>
                            <Link to="#">Овощи, фрукы, ягоды</Link>
                        </li>
                        <li 
                            onClick={() => setCategorySelected(4)} 
                            className={categorySelected && categorySelected === 4 ? "uk-active" : ""
                        }>
                            <Link to="#">Рыба, икра</Link>
                        </li>
                        <li 
                            onClick={() => setCategorySelected(5)} 
                            className={categorySelected && categorySelected === 5 ? "uk-active" : ""
                        }>
                            <Link to="#">Птица, мясо, деликатесы</Link>
                        </li>
                        <li 
                            onClick={() => setCategorySelected(6)} 
                            className={categorySelected && categorySelected === 6 ? "uk-active" : ""
                        }>
                            <Link to="#">Молоко, сыр, яйца</Link>
                        </li>
                        <li 
                            onClick={() => setCategorySelected(7)} 
                            className={categorySelected && categorySelected === 7 ? "uk-active" : ""
                        }>
                            <Link to="#">Воды, соки, напитки</Link>
                        </li>
                    </ul>
                </div>
        </>
    );
};

export default Category;