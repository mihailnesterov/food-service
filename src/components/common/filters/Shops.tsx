import React, {FC} from 'react';
import { Link } from 'react-router-dom';

const IconMap: FC = () => {
    return(
        <button className="uk-button uk-button-link">
            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.50002 4.14557C7.96486 4.14557 7.44172 4.30426 6.99674 4.60158C6.55177 4.8989 6.20496 5.3215 6.00016 5.81593C5.79536 6.31035 5.74178 6.8544 5.84618 7.37928C5.95059 7.90416 6.20829 8.3863 6.58671 8.76472C6.96513 9.14313 7.44726 9.40084 7.97214 9.50525C8.49702 9.60965 9.04108 9.55607 9.5355 9.35127C10.0299 9.14647 10.4525 8.79966 10.7498 8.35468C11.0472 7.90971 11.2059 7.38657 11.2059 6.8514C11.2059 6.13377 10.9208 5.44553 10.4133 4.93809C9.90589 4.43065 9.21766 4.14557 8.50002 4.14557ZM8.50002 8.61279C8.15165 8.61279 7.81111 8.50949 7.52145 8.31594C7.23179 8.1224 7.00603 7.84731 6.87271 7.52546C6.7394 7.20361 6.70452 6.84945 6.77248 6.50777C6.84044 6.1661 7.0082 5.85225 7.25453 5.60591C7.50087 5.35958 7.81472 5.19182 8.15639 5.12386C8.49807 5.05589 8.85223 5.09078 9.17408 5.22409C9.49593 5.35741 9.77102 5.58317 9.96457 5.87283C10.1581 6.16249 10.2614 6.50303 10.2614 6.8514C10.2602 7.31773 10.074 7.76454 9.74385 8.09384C9.41366 8.42314 8.96636 8.60807 8.50002 8.60807V8.61279Z" fill="#43B727"/>
                <path d="M8.50003 1.44446C7.02915 1.44569 5.61853 2.02892 4.57625 3.06678C3.53397 4.10463 2.94474 5.51276 2.93726 6.98362C2.93726 9.1889 4.17448 11.0353 5.08114 12.3811L5.24642 12.6267C6.1485 13.9341 7.11622 15.195 8.14587 16.4045L8.50476 16.8247L8.86364 16.4045C9.89316 15.1949 10.8609 13.934 11.7631 12.6267L11.9284 12.3764C12.8303 11.0306 14.0675 9.1889 14.0675 6.98362C14.06 5.51195 13.4702 4.1031 12.4269 3.06511C11.3836 2.02712 9.97173 1.44444 8.50003 1.44446V1.44446ZM11.1398 11.8333L10.9698 12.0836C10.1575 13.302 9.08087 14.6667 8.50003 15.342C7.94281 14.6667 6.84253 13.302 6.03031 12.0836L5.86503 11.8333C5.0292 10.5867 3.8817 8.88196 3.8817 6.96474C3.8817 6.35825 4.00116 5.7577 4.23325 5.19738C4.46534 4.63705 4.80553 4.12793 5.23438 3.69908C5.66323 3.27023 6.17235 2.93005 6.73267 2.69795C7.293 2.46586 7.89355 2.3464 8.50003 2.3464C9.10652 2.3464 9.70707 2.46586 10.2674 2.69795C10.8277 2.93005 11.3368 3.27023 11.7657 3.69908C12.1945 4.12793 12.5347 4.63705 12.7668 5.19738C12.9989 5.7577 13.1184 6.35825 13.1184 6.96474C13.1184 8.90085 11.9756 10.6056 11.1398 11.8333V11.8333Z" fill="#43B727"/>
            </svg>
        </button>
    );
}

/**
 * Блок "Выбрать магазины" в фильтре корзины
 * @returns JSX
 */
const Shops: FC = () => {

	return(
        <>
            <Link className="uk-accordion-title" to="#">Выбрать магазины</Link>
            <div className="uk-accordion-content">
                
                <div className="uk-form-controls uk-margin-bottom">
                    <div className="uk-inline">
                        <Link 
                            className="uk-form-icon uk-form-icon-flip" 
                            to="#" 
                            data-uk-icon="icon: search"
                        ></Link>

                        <input 
                            className="uk-input search-shops" 
                            type="text"
                            placeholder="Поиск" />

                    </div>
                </div>

                <div className="uk-form-controls shops-list">
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Lenta" 
                            defaultChecked={false} /> <span>Лента</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Perekrestok" 
                            defaultChecked={true} /> <span>Перекресток</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Magnit" 
                            defaultChecked={false} /> <span>Магнит</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Pyaterochka" 
                            defaultChecked={false} /> <span>Пятерочка</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-VkussVill" 
                            defaultChecked={false} /> <span>ВкуссВилл</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Azbuka-vkusa" 
                            defaultChecked={false} /> <span>Азбука Вкуса</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Metro" 
                            defaultChecked={false} /> <span>METRO</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Ashan" 
                            defaultChecked={false} /> <span>Ашан</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Billa" 
                            defaultChecked={false} /> <span>Billa</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Eurospar" 
                            defaultChecked={false} /> <span>Eurospar</span> <IconMap />
                    </label>
                    <label>
                        <input 
                            className="uk-checkbox" 
                            type="checkbox" 
                            name="checkbox-Diksi" 
                            defaultChecked={false} /> <span>Дикси</span> <IconMap />
                    </label>
                </div>
            </div>
        </>
    );
};

export default Shops;