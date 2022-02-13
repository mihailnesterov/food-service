import React, {FC, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';
import PersonalHeader from '../components/personal/PersonalHeader';
import PersonalMenu from '../components/personal/PersonalMenu';
import PersonalForm from '../components/personal/PersonalForm';
import PersonalFormAddPhoto from '../components/personal/PersonalFormAddPhoto';
import PersonalSavedCarts from '../components/personal/PersonalSavedCarts';
import AddNewSavedCart from '../components/personal/savedcarts/AddNewSavedCart';
import PersonalMyRecipes from '../components/personal/PersonalMyRecipes';
import AddNewRecipe from '../components/personal/recipes/AddNewRecipe';
import PersonalPurchaseHistory from '../components/personal/PersonalPurchaseHistory';
import PersonalOffers from '../components/personal/PersonalOffers';
import CartsFromShops from '../components/personal/offers/CartsFromShops';
import Favorits from './Favorits';

/**
 * Страница профиля пользователя
 * @returns JSX
 */
const Personal: FC = () => {
    document.title = "Личные данные";

    // store
    const {users} = useTypedSelector(state => state.user);
    // action-creators
    //const {fetchUser} = useActions();

    const[user, setUser] = useState<any | null>(null);
    useEffect(() => {
        users && users.length > 0 && setUser(users[0]);
    }, [users]);
    
    const[menuItemActive, setMenuItemActive] = useState<number>(1);

    console.log(users, user, menuItemActive);
	
    return(
        <div className="uk-container-expand uk-padding-remove-top personal-container">
            
            <div className="uk-padding uk-padding-remove-left uk-padding-remove-right">
                <div className="uk-container">
                    <PersonalHeader user={user} />
                </div>                
            </div>
            
            <div className="uk-padding-remove">
                <div className="uk-container">
                    <div className="personal-content">
                        <PersonalMenu
                            setMenuItemActive={setMenuItemActive}
                            menuItemActive={menuItemActive}
                        />

                        <div className="uk-flex uk-flex-top uk-flex-left uk-flex-wrap">
                            {
                                menuItemActive === 1 &&
                                <>
                                    <div className="uk-width-1-1 uk-width-2-5@m uk-width-1-4@l">
                                        {user && <PersonalForm user={user} />}
                                    </div>
                                    <div className="uk-width-1-1 uk-width-3-5@m uk-width-3-4@l">
                                        {user && <PersonalFormAddPhoto user={user} />}
                                    </div>
                                </>
                            }
                            {
                                menuItemActive === 2 &&
                                <>
                                    <div className="uk-width-1-1 uk-width-3-5@m uk-width-3-4@l">
                                        <PersonalSavedCarts />
                                    </div>
                                    <div className="uk-width-1-1 uk-width-2-5@m uk-width-1-4@l">
                                        <AddNewSavedCart />
                                    </div>
                                </>
                            }
                            {
                                menuItemActive === 3 &&
                                <>
                                    <div className="uk-width-1-1 uk-width-3-5@m uk-width-3-4@l">
                                        <PersonalMyRecipes />
                                    </div>
                                    <div className="uk-width-1-1 uk-width-2-5@m uk-width-1-4@l">
                                        <div className="uk-align-right">
                                            <AddNewRecipe />
                                        </div>
                                    </div>
                                </>
                            }
                            {
                                menuItemActive === 5 &&
                                <div className="personal-purchases-list">
                                    <PersonalPurchaseHistory />
                                </div>
                            }
                            {
                                menuItemActive === 7 &&
                                <div className="personal-offers-list">
                                    <div 
                                        className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-5@l uk-grid uk-grid-match" 
                                        data-uk-grid
                                    >
                                        <PersonalOffers />
                                    </div>
                                    <div>
                                        <CartsFromShops />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>

                {
                    menuItemActive === 9 &&
                    <div className="personal-favorits-list">
                        <Favorits />
                    </div>
                }
            </div>
        </div>
    );
};

export default Personal;