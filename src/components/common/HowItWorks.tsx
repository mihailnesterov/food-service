import React, {FC} from 'react';

/**
 * Блок "Как это работает?" на главной странице
 * @returns JSX
 */
const HowItWorks: FC = () => {
	return(
        <div className="uk-margin uk-flex uk-flex-wrap">
            <div className="uk-width-1-1 uk-padding uk-padding-remove-horizontal">
                <h2 className="uk-text-center uk-text-left@m">Как это работает?</h2>
                <div className="uk-flex uk-flex-wrap uk-text-center">
                    <div className="uk-width-1-4@m uk-padding-small">
                        <img src={"./img/how-it-works/step-1.png"} alt="Шаг 1" />
                    </div>
                    <div className="uk-width-1-4@m uk-padding-small">
                        <img src={"./img/how-it-works/step-2.png"} alt="Шаг 2" />
                    </div>
                    <div className="uk-width-1-4@m uk-padding-small">
                        <img src={"./img/how-it-works/step-3.png"} alt="Шаг 3" />
                    </div>
                    <div className="uk-width-1-4@m uk-padding-small">
                        <img src={"./img/how-it-works/step-4.png"} alt="Шаг 4" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;