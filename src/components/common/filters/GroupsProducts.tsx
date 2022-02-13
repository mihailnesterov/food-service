import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';

/**
 * Болок "Разделы" в фильтре каталога
 * @returns JSX
 */
const GroupsProducts: FC = () => {

    const [groupSelected, setGroupSelected] = useState<number | null>(null);
	return(
        <>
            <Link className="uk-accordion-title" to="#">Разделы</Link>
                <div className="uk-accordion-content">
                    <ul className="uk-nav uk-nav-default">
                        <li 
                            onClick={() => setGroupSelected(1)} 
                            className={groupSelected && groupSelected === 1 ? "uk-active" : ""
                        }>
                                <Link to="#">Чай</Link>
                        </li>
                        <li 
                            onClick={() => setGroupSelected(2)} 
                            className={groupSelected && groupSelected === 2 ? "uk-active" : ""
                        }>
                            <Link to="#">Кофе</Link>
                        </li>
                        <li 
                            onClick={() => setGroupSelected(3)} 
                            className={groupSelected && groupSelected === 3 ? "uk-active" : ""
                        }>
                            <Link to="#">Какао, шоколад</Link>
                        </li>
                        <li 
                            onClick={() => setGroupSelected(4)} 
                            className={groupSelected && groupSelected === 4 ? "uk-active" : ""
                        }>
                            <Link to="#">Сахар</Link>
                        </li>
                        <li 
                            onClick={() => setGroupSelected(5)} 
                            className={groupSelected && groupSelected === 5 ? "uk-active" : ""
                        }>
                            <Link to="#">Подсластители и заменители сахара</Link>
                        </li>
                        <li 
                            onClick={() => setGroupSelected(6)} 
                            className={groupSelected && groupSelected === 6 ? "uk-active" : ""
                        }>
                            <Link to="#">Натуральный чай, кофе, какао</Link>
                        </li>
                        <li 
                            onClick={() => setGroupSelected(7)} 
                            className={groupSelected && groupSelected === 7 ? "uk-active" : ""
                        }>
                            <Link to="#">Цикорий</Link>
                        </li>
                    </ul>
                </div>
        </>
    );
};

export default GroupsProducts;