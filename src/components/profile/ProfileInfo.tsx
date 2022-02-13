import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import ProductMenu from './ProductMenu';

interface IProfileInfo {
    setProductMenuItemActive: (num: number) => void;
    productMenuItemActive: number;
}

/**
 * Блок "Информация" в профиле продавца
 * @returns JSX
 */
const ProfileInfo: FC<IProfileInfo> = (props: IProfileInfo) => {
    
    const {setProductMenuItemActive, productMenuItemActive} = props;

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log('onSubmit', e.target);
    }

	return(
        <form className="profile-info" onSubmit={onSubmit}>
            <div>
                <div className="profile-info__edit-photo">
                    <div>
                        <img src="./img/shops/logo/logo-perektestok.png" alt="Перекресток" />
                    </div>
                    <div data-uk-form-custom>
                        <input type="file" style={{cursor: "pointer"}} />
                        <Button 
                            type="button"
                            classlist={"uk-button uk-button-link"}
                            style={{
                                color: "#43B727",
                            }}
                            onClick={() => {}}
                            text="Редактировать фото"
                        />
                    </div>
                </div>
            </div>

            <div className="uk-flex uk-flex-top uk-flex-between">

                <div className="uk-width-1-1 uk-width-1-3@m">
                    
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Название организации</span>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type="text" 
                                defaultValue="ООО Перекресток"
                                required
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Адрес магазина</span>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type="text" 
                                defaultValue="Московская область, г. Жуковский, ул. Гагарина, дом 3"
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Направление деятельности</span>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type="text" 
                                defaultValue="Ритейл"
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Телефон</span>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type="text" 
                                defaultValue="+7 (999) 44 44 444"
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div>
                            <h4>Карточка юр. лица</h4>
                        </div>
                        <div data-uk-form-custom>
                            <input type="file" style={{cursor: "pointer"}} />
                        </div>
                        <div>
                            <p>Карточка_ооо.pdf</p>
                            <img src="./img/profile/seller-card.png" alt="Карточка_ооо.pdf" />
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.81641 4.97248L9.86641 0.922476C9.95743 0.816197 10.005 0.679488 9.99959 0.539668C9.99419 0.399848 9.93622 0.267216 9.83728 0.168274C9.73834 0.0693328 9.60571 0.0113701 9.46589 0.00596948C9.32607 0.000568837 9.18936 0.048128 9.08308 0.139143L5.03308 4.18914L0.98308 0.133587C0.876801 0.0425723 0.740093 -0.00498632 0.600273 0.000414325C0.460452 0.00581497 0.32782 0.0637772 0.228878 0.162719C0.129937 0.26166 0.0719742 0.394293 0.0665736 0.534113C0.0611729 0.673933 0.108732 0.810642 0.199747 0.91692L4.24975 4.97248L0.194191 9.02248C0.136035 9.07228 0.088801 9.13357 0.0554548 9.20249C0.0221085 9.27142 0.00336926 9.34649 0.000413989 9.423C-0.00254129 9.49951 0.0103509 9.57581 0.0382812 9.6471C0.0662115 9.71839 0.108577 9.78314 0.162719 9.83728C0.21686 9.89142 0.281609 9.93379 0.352901 9.96172C0.424192 9.98965 0.500488 10.0025 0.576999 9.99959C0.653509 9.99663 0.728583 9.97789 0.797508 9.94455C0.866433 9.9112 0.92772 9.86397 0.977524 9.80581L5.03308 5.75581L9.08308 9.80581C9.18936 9.89682 9.32607 9.94438 9.46589 9.93898C9.60571 9.93358 9.73834 9.87562 9.83728 9.77668C9.93622 9.67774 9.99419 9.5451 9.99959 9.40528C10.005 9.26546 9.95743 9.12876 9.86641 9.02248L5.81641 4.97248Z" fill="#F76161"/>
                            </svg>
                        </div>
                    </div>

                    <div>
                        <Button 
                            type="submit"
                            classlist={"uk-button uk-button-primary"}
                            style={{
                                padding: "0.75rem 1rem",
                            }}
                            onClick={() => {}}
                            text="Сохранить изменения"
                        />
                    </div>

                </div>
                
                <div className="uk-width-1-1 uk-width-1-3@m">
                    
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Город</span>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type="text" 
                                defaultValue="Москва"
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Контактное лицо</span>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type="text" 
                                defaultValue="Андрей Оверьянов"
                            />
                        </div>
                    </div>

                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Эл. почта</span>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type="text" 
                                defaultValue="perek@perek.ru"
                            />
                        </div>
                    </div>

                </div>
                
                <div className="uk-width-1-1 uk-width-1-3@m">
                    <div className="work-time">
                        
                        <div>
                            <h4>Режим работы</h4>
                        </div>
                        <div>
                            <div>
                                <span>Пн</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="08:00"
                                />
                                <span>:</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="23:00"
                                />
                            </div>
                            <div>
                                <span>Вт</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="08:00"
                                />
                                <span>:</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="23:00"
                                />
                            </div>
                            <div>
                                <span>Ср</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="08:00"
                                />
                                <span>:</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="23:00"
                                />
                            </div>
                            <div>
                                <span>Чт</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="08:00"
                                />
                                <span>:</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="23:00"
                                />
                            </div>
                            <div>
                                <span>Пт</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="08:00"
                                />
                                <span>:</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="23:00"
                                />
                            </div>
                            <div>
                                <span>Сб</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="08:00"
                                />
                                <span>:</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="23:00"
                                />
                            </div>
                            <div>
                                <span>Вс</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="08:00"
                                />
                                <span>:</span>
                                <input 
                                    className="uk-input uk-width-1-6" 
                                    type="text"
                                    defaultValue="23:00"
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </form>
    );
};

export default ProfileInfo;