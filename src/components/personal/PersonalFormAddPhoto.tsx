import React, {FC} from 'react';
import {IUser} from '../../interfaces';
import Button from '../common/Button';

/**
 * Форма "Добавить фото" в профиле пользователя
 * @returns JSX
 */
const PersonalFormAddPhoto: FC<IUser> = (props: IUser) => {
    
    const {user} = props;    
    // эту форму переместить в форму PersonalForm (объединить)
	return(
        <form className="personal-user-form__add-photo">
            <div className="uk-margin">
                {
                    user &&
                    <div>
                        <img src={user.photo} alt={`${user.lastName} ${user.firstName}`} />
                    </div>
                }
                <div data-uk-form-custom>
                    <input type="file" style={{cursor: "pointer"}} />
                    <Button 
                        type="button"
                        classlist={"uk-button uk-button-primary"}
                        style={{
                            padding: "0.8rem 1rem",
                            height: "auto",
                            color: "#262626",
                            backgroundColor: "#fff",
                            border: "1px #43B727 solid"
                        }}
                        onClick={() => {}}
                        text="Добавить фото"
                    />
                </div>
            </div>
        </form>
    );
};

export default PersonalFormAddPhoto;