import React, {FC} from 'react';
import Button from './Button';

/**
 * Блок "О сервисе" на главной странице
 * @returns JSX
 */
const AboutService: FC = () => {
	return(
        <div 
            className="uk-margin uk-flex uk-flex-wrap">
            <div className="uk-width-2-5@m">
                <div className=" uk-hidden@m uk-width-2-5@m">
                    <img src={"./img/about-service.png"} alt="О сервисе" />
                </div>
                <h2>О сервисе</h2>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar duis sed non quam. Mauris eu egestas sed pharetra. Nunc vitae odio vivamus cursus nibh eu libero. Accumsan, amet, mi tempus scelerisque eleifend bibendum in aliquam nunc. Bibendum risus, pulvinar lorem orci lacinia.</p>
                    <p>Tempor, morbi suscipit est maecenas. Nulla ullamcorper amet in quis tellus pretium habitant. Ornare arcu donec nulla congue tortor non. At nunc odio facilisi sociis. Ac nibh amet magna in volutpat pellentesque dui.</p>
                    <Button 
                        type="button"
                        classlist={"uk-button-primary"}
                        style={{
                            padding: "0.5rem 0.8rem 0.5rem 1rem",
                            marginBottom: "1rem"
                        }}
                        onClick={(e: any) => console.log(e)}
                        text={
                            <>
                            <span>Подробнее</span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5104 12.5114C15.5109 12.7451 15.4295 12.9715 15.2804 13.1514L10.2804 19.1514C10.1107 19.3557 9.86679 19.4841 9.60236 19.5085C9.33794 19.5328 9.07465 19.4512 8.87044 19.2814C8.66622 19.1117 8.5378 18.8678 8.51342 18.6034C8.48904 18.3389 8.5707 18.0757 8.74044 17.8714L13.2204 12.5114L8.90044 7.15144C8.81737 7.04915 8.75534 6.93146 8.71791 6.80512C8.68048 6.67878 8.66838 6.54629 8.68232 6.41526C8.69626 6.28423 8.73596 6.15725 8.79913 6.04161C8.86231 5.92598 8.94771 5.82397 9.05044 5.74144C9.15326 5.64986 9.27389 5.5805 9.40476 5.53771C9.53563 5.49492 9.67393 5.47962 9.811 5.49276C9.94806 5.5059 10.0809 5.54721 10.2013 5.61409C10.3216 5.68097 10.4269 5.77199 10.5104 5.88144L15.3404 11.8814C15.466 12.0665 15.5258 12.2883 15.5104 12.5114Z" fill="white"/>
                                </svg>
                            </span>
                            </>
                        }
                    />
                </div>
            </div>
            <div className="uk-width-1-5@m"></div>
            <div className="uk-visible@m uk-width-2-5@m">
                <img src={"./img/about-service.png"} alt="О сервисе" />
            </div>

        </div>
    );
};

export default AboutService;