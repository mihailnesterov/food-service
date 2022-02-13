import React, {FC} from 'react';
import { Link } from 'react-router-dom';


/**
 * Шапка в профиле продавца
 * @returns JSX
 */
const ProfileHeader: FC = () => {

	return(
        <div className="profile-header">
            <header>
                <div>
                    <img src="./img/shops/logo/logo-perektestok.png" alt="Перекресток" />
                </div>
                <div>
                    <h1>ООО Перекресток</h1>
                    <p>Профиль продавца</p>
                </div>
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
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.5441 10.456C12.7249 9.6372 11.6142 9.17725 10.4561 9.17725C9.2979 9.17725 8.18716 9.6372 7.36805 10.456L4.27905 13.544C3.45993 14.3631 2.99976 15.474 2.99976 16.6325C2.99976 17.7909 3.45993 18.9018 4.27905 19.721C5.09818 20.5401 6.20914 21.0003 7.36755 21.0003C8.52597 21.0003 9.63693 20.5401 10.4561 19.721L12.0001 18.177" stroke="#43B727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.4561 13.5441C11.2752 14.3628 12.3859 14.8228 13.5441 14.8228C14.7022 14.8228 15.8129 14.3628 16.6321 13.5441L19.7211 10.4561C20.5402 9.63693 21.0004 8.52597 21.0004 7.36755C21.0004 6.20914 20.5402 5.09818 19.7211 4.27905C18.9019 3.45993 17.791 2.99976 16.6326 2.99976C15.4741 2.99976 14.3632 3.45993 13.5441 4.27905L12.0001 5.82305" stroke="#43B727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Link to="/shop">Страница магазина</Link>
                </div>
            </div>
        </div>
    );
};

export default ProfileHeader;