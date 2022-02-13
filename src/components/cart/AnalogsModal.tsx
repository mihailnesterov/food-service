import React, {FC} from 'react';
import AnalogProduct from './AnalogProduct';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.use(Icons);

const analogs =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

/**
 * Модальное окно "Аналоги" в корзине
 * @returns JSX
 */
const AnalogsModal: FC = () => {
	return(
        <div id="modal-product-analogs" className="uk-modal-container" data-uk-modal>
            <div className="uk-modal-dialog uk-modal-body" data-uk-overflow-auto>
                
                <div className="uk-margin uk-flex uk-flex-middle uk-flex-between">
                    <header className="uk-flex uk-flex-middle">
                        <h2 className="uk-modal-title">Товары аналоги</h2>
                        <span>15 товаров</span>
                    </header>
                    
                    <div className="uk-form-controls">
                        <div className="analogs-sort">
                            <span data-uk-icon="arrow-up; ratio: 2"></span>
                            <span data-uk-icon="arrow-down; ratio: 2"></span>
                            <select className="uk-select" id="form-analogs-select">
                                <option>По цене</option>
                                <option>По популярности</option>
                                <option>По бренду</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="uk-flex uk-flex-between uk-flex-wrap">
                    {
                        analogs &&
                        analogs.map(item => <AnalogProduct key={item} />)
                    }
                </div>
                <div className="uk-flex uk-flex-right uk-text-right">
                    <button 
                        className="uk-button uk-button-default uk-modal-close" 
                        type="button">Закрыть
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnalogsModal;