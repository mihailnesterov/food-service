import React, {FC} from 'react';
import HeadContacts from './HeadContacts';
import MainMenu from './MainMenu';
import PriceProduct from './PriceProduct';
import ToggleSearch from './ToggleSearch';

const Head: FC = () => {

	return(
        <div className="head-wrapper">
            <div className="uk-container head-container">

                <header className="head-desktop uk-visible@m">
                    <div className="uk-flex uk-flex-between uk-flex-nowrap">
                        <div className="uk-width-1-3 uk-width-1-3@m uk-width-1-5@l uk-flex uk-flex-middle uk-flex-wrap uk-flex-left">
                            <ToggleSearch />
                        </div>
                        <div className="uk-width-auto uk-flex uk-flex-middle uk-flex-center">
                            <MainMenu />
                        </div>
                        <div className="uk-width-1-3 uk-width-1-4@m uk-width-1-5@l uk-flex uk-flex-middle uk-flex-wrap uk-flex-right">
                            <HeadContacts />
                        </div>
                    </div>
                </header>

                <header className="head-mobile uk-hidden@m uk-flex uk-flex-between uk-padding-small uk-padding-remove uk-flex-nowrap head">
                    <div className="uk-flex uk-flex-middle uk-flex-center">
                        <MainMenu />
                    </div>
                </header>

                <div className="uk-visible@m uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
                    <div className="uk-width-1-1">
                        <PriceProduct />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;