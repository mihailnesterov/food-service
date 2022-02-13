import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import {IUser} from '../../interfaces';

/**
 * Блок с персональными данными в шапке профиля пользователя
 * @returns JSX
 */
const PersonalHeader: FC<IUser> = (props: IUser) => {
    
    const {user} = props;
	
    return(
        <div className="personal-header">
            <header>
                {
                    user && 
                    <>
                        <div>
                            <img src={user.photo} alt={`${user.lastName} ${user.firstName}`} />
                        </div>
                        <div>
                            <h1>{`${user.lastName} ${user.firstName}`}</h1>
                            <p>Профиль покупателя</p>
                        </div>
                    </>
                }
                
            </header>
            <div>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 8.25V6.375C15 5.87772 14.8025 5.40081 14.4508 5.04917C14.0992 4.69754 13.6223 4.5 13.125 4.5H4.125C3.62772 4.5 3.15081 4.69754 2.79917 5.04917C2.44754 5.40081 2.25 5.87772 2.25 6.375V17.625C2.25 18.1223 2.44754 18.5992 2.79917 18.9508C3.15081 19.3025 3.62772 19.5 4.125 19.5H13.125C13.6223 19.5 14.0992 19.3025 14.4508 18.9508C14.8025 18.5992 15 18.1223 15 17.625V15.75" stroke="#43B727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 8.25L21.75 12L18 15.75" stroke="#43B727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.95312 12H21.75" stroke="#43B727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Link to="/logout">Выйти</Link>
                </div>
            </div>
        </div>
    );
};

export default PersonalHeader;