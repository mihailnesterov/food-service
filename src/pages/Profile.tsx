import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileMenu from '../components/profile/ProfileMenu';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileProducts from '../components/profile/ProfileProducts';

/**
 * Страница профиля магазина
 * @returns JSX
 */
const Profile: FC = () => {
    document.title = "Профиль магазина";
    
    const[menuItemActive, setMenuItemActive] = useState<number>(1);
    const[productMenuItemActive, setProductMenuItemActive] = useState<number>(1);
	
    return(
        <div className="uk-container-expand uk-padding-remove-top profile-container">
            
            <div className="uk-padding uk-padding-remove-left uk-padding-remove-right">
                <div className="uk-container">
                    <ProfileHeader />
                </div>                
            </div>
            
            <div className="uk-padding-remove">
                <div className="uk-container">
                    <div className="profile-content">
                        <ProfileMenu
                            setMenuItemActive={setMenuItemActive}
                            menuItemActive={menuItemActive}
                        />
                        {
                            menuItemActive === 1 &&
                            <ProfileInfo
                                setProductMenuItemActive={setProductMenuItemActive}
                                productMenuItemActive={productMenuItemActive}
                            />
                        }
                        {
                            menuItemActive === 4 &&
                            <ProfileProducts 
                                setProductMenuItemActive={setProductMenuItemActive}
                                productMenuItemActive={productMenuItemActive}
                            />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;