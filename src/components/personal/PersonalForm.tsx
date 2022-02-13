import React, {FC, useState} from 'react';
import {IUser} from '../../interfaces';
import Button from '../common/Button';

/**
 * Форма с личными данными в профиле пользователя
 * @returns JSX
 */
const PersonalForm: FC<IUser> = (props: IUser) => {
    
    const {user} = props;

    const [isPasswordChange, setIsPasswordChange] = useState<boolean>(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

    const onSubmit = (e: any) => {
        e.preventDefault();
        console.log('onSubmit', e.target);
    }

	return(
        <form className="personal-user-form" onSubmit={onSubmit}>
            <div className="uk-margin">
                <div className="uk-inline">
                    <span>Имя</span>
                    <input 
                        className="uk-input uk-form-width-large" 
                        type="text" 
                        defaultValue={`${user.lastName} ${user.firstName}`} 
                        required
                    />
                </div>
            </div>

            <div className="uk-margin">
                <div className="uk-inline">
                    <span>Город</span>
                    <input 
                        className="uk-input uk-form-width-large" 
                        type="text" 
                        defaultValue={user.cityId === 1 ? 'Москва' : 'Москва'}
                    />
                </div>
            </div>

            <div className="uk-margin">
                <div className="uk-inline">
                    <span>Эл. почта</span>
                    <input 
                        className="uk-input uk-form-width-large" 
                        type="text" 
                        defaultValue={user.email}
                    />
                </div>
            </div>

            <div className="uk-margin">
                <div className="uk-inline">
                    <span>Телефон</span>
                    <input 
                        className="uk-input uk-form-width-large" 
                        type="text" 
                        defaultValue={user.phone}
                    />
                </div>
            </div>
            {
                isPasswordChange &&
                <>
                    <div className="uk-margin">
                        <div className="uk-inline">
                            <span>Пароль</span>
                            <button
                                type="button" 
                                className="uk-form-icon uk-form-icon-flip" 
                                data-uk-icon="icon: cog"
                                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                title={!isPasswordVisible ? "Показать пароль" : "Скрыть пароль"}
                                ></button>
                            <input 
                                className="uk-input uk-form-width-large" 
                                type={!isPasswordVisible ? "password" : "text"} 
                                placeholder="Введите пароль"
                            />
                        </div>
                    </div>
                </>
            }

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
                <Button 
                    type="button"
                    classlist={"uk-button uk-button-link"}
                    style={{
                        padding: "0.8rem 1rem",
                        color: "#43B727",
                        backgroundColor: "unset",
                        border: 0
                    }}
                    onClick={() => setIsPasswordChange(!isPasswordChange)}
                    text={!isPasswordChange ? "Изменить пароль" : "Скрыть пароль"}
                />
            </div>

        </form>
    );
};

export default PersonalForm;