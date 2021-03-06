import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import FooterContacts from '../footer/FooterContacts';

const Footer: FC = () => {

	return(
        <footer className="uk-container-expand footer-container">
            <div className="uk-container uk-flex uk-flex-column">
                <div className="uk-flex uk-flex-top uk-flex-center uk-flex-wrap">
                    
                    <div className="uk-width-1-1 uk-width-1-5@l">
                        <h2>Price Product</h2>
                        <p>© Price Product, 2021</p>
                        <p>Все права защищены</p>
                    </div>
                    <div className="uk-width-1-1 uk-width-1-5@l">
                        <h3>О компании</h3>
                        <ul className="uk-list">
                            <li><Link to="/about">О сайте</Link></li>
                            <li><Link to="/shops">Магазины</Link></li>
                        </ul>
                    </div>
                    <div className="uk-width-1-1 uk-width-1-5@l">
                        <h3>Партнерам</h3>
                        <ul className="uk-list">
                            <li><Link to="/partners">Партнерам</Link></li>
                            <li><Link to="/ads">Реклама</Link></li>
                        </ul>
                    </div>
                    <div className="uk-width-1-1 uk-width-1-5@l">
                        <h3>Документация</h3>
                        <ul className="uk-list">
                            <li><Link to="/partners">Партнерам</Link></li>
                            <li><Link to="/legal">Юридическая информация</Link></li>
                            <li><Link to="/policy">Политика конфиденциальности</Link></li>
                            <li><Link to="/agreement">Пользовательское соглашение</Link></li>
                        </ul>
                    </div>
                    <div className="uk-width-1-1 uk-width-1-5@l">
                        <div className="social-buttons">
                            <button>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#5CC97B"/>
                                    <g clipPath="url(#clip0_13:6150)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M35.45 17.948C35.616 17.402 35.45 17 34.655 17H32.03C31.362 17 31.054 17.347 30.887 17.73C30.887 17.73 29.552 20.926 27.661 23.002C27.049 23.604 26.771 23.795 26.437 23.795C26.27 23.795 26.019 23.604 26.019 23.057V17.948C26.019 17.292 25.835 17 25.279 17H21.151C20.734 17 20.483 17.304 20.483 17.593C20.483 18.214 21.429 18.358 21.526 20.106V23.904C21.526 24.737 21.373 24.888 21.039 24.888C20.149 24.888 17.984 21.677 16.699 18.003C16.45 17.288 16.198 17 15.527 17H12.9C12.15 17 12 17.347 12 17.73C12 18.412 12.89 21.8 16.145 26.281C18.315 29.341 21.37 31 24.153 31C25.822 31 26.028 30.632 26.028 29.997V27.684C26.028 26.947 26.186 26.8 26.715 26.8C27.105 26.8 27.772 26.992 29.33 28.467C31.11 30.216 31.403 31 32.405 31H35.03C35.78 31 36.156 30.632 35.94 29.904C35.702 29.18 34.852 28.129 33.725 26.882C33.113 26.172 32.195 25.407 31.916 25.024C31.527 24.533 31.638 24.314 31.916 23.877C31.916 23.877 35.116 19.451 35.449 17.948H35.45Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_13:6150">
                                    <rect width="24" height="24" fill="white" transform="translate(12 12)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#5CC97B"/>
                                    <g clipPath="url(#clip0_13:6154)">
                                    <path d="M20.9898 36V24.7385H18V20.6838H20.9898V17.2206C20.9898 14.4992 22.7559 12 26.8253 12C28.473 12 29.6913 12.1573 29.6913 12.1573L29.5953 15.9437C29.5953 15.9437 28.3528 15.9317 26.9969 15.9317C25.5294 15.9317 25.2943 16.6052 25.2943 17.7232V20.6838H29.712L29.5198 24.7385H25.2943V36H20.9898Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_13:6154">
                                    <rect width="11.712" height="24" fill="white" transform="translate(18 12)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#5CC97B"/>
                                    <g clipPath="url(#clip0_13:6157)">
                                    <path d="M35.5 18.5071C35.3641 18.0223 35.0994 17.5834 34.734 17.2371C34.3583 16.8801 33.8978 16.6247 33.396 16.4951C31.518 16.0001 23.994 16.0001 23.994 16.0001C20.8573 15.9644 17.7214 16.1214 14.604 16.4701C14.1022 16.6093 13.6426 16.8704 13.266 17.2301C12.896 17.5861 12.628 18.0251 12.488 18.5061C12.1517 20.3178 11.9883 22.1574 12 24.0001C11.988 25.8411 12.151 27.6801 12.488 29.4941C12.625 29.9731 12.892 30.4101 13.263 30.7631C13.634 31.1161 14.096 31.3711 14.604 31.5061C16.507 32.0001 23.994 32.0001 23.994 32.0001C27.1347 32.0358 30.2746 31.8789 33.396 31.5301C33.8978 31.4004 34.3583 31.1451 34.734 30.7881C35.104 30.4351 35.367 29.9961 35.499 29.5181C35.8441 27.707 36.0119 25.8667 36 24.0231C36.026 22.1717 35.8584 20.3226 35.5 18.5061V18.5071ZM21.602 27.4241V20.5771L27.862 24.0011L21.602 27.4241Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_13:6157">
                                    <rect width="24" height="24" fill="white" transform="translate(12 12)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </button>
                            <button>
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#5CC97B"/>
                                    <path d="M23.9968 19.9983C21.7933 19.9983 19.9951 21.7965 19.9951 24C19.9951 26.2035 21.7933 28.0017 23.9968 28.0017C26.2002 28.0017 27.9984 26.2035 27.9984 24C27.9984 21.7965 26.2002 19.9983 23.9968 19.9983ZM35.9987 24C35.9987 22.3429 36.0137 20.7008 35.9206 19.0467C35.8275 17.1254 35.3893 15.4202 33.9843 14.0153C32.5764 12.6073 30.8743 12.172 28.953 12.0789C27.2959 11.9859 25.6539 12.0009 23.9998 12.0009C22.3427 12.0009 20.7006 11.9859 19.0465 12.0789C17.1253 12.172 15.4201 12.6103 14.0152 14.0153C12.6073 15.4232 12.172 17.1254 12.0789 19.0467C11.9859 20.7038 12.0009 22.3459 12.0009 24C12.0009 25.6541 11.9859 27.2992 12.0789 28.9533C12.172 30.8746 12.6103 32.5798 14.0152 33.9847C15.4231 35.3927 17.1253 35.828 19.0465 35.9211C20.7036 36.0141 22.3457 35.9991 23.9998 35.9991C25.6569 35.9991 27.2989 36.0141 28.953 35.9211C30.8743 35.828 32.5794 35.3897 33.9843 33.9847C35.3923 32.5768 35.8275 30.8746 35.9206 28.9533C36.0167 27.2992 35.9987 25.6571 35.9987 24V24ZM23.9968 30.1572C20.5895 30.1572 17.8397 27.4073 17.8397 24C17.8397 20.5927 20.5895 17.8428 23.9968 17.8428C27.404 17.8428 30.1538 20.5927 30.1538 24C30.1538 27.4073 27.404 30.1572 23.9968 30.1572ZM30.406 19.0286C29.6105 19.0286 28.968 18.3862 28.968 17.5907C28.968 16.7951 29.6105 16.1527 30.406 16.1527C31.2015 16.1527 31.8439 16.7951 31.8439 17.5907C31.8442 17.7796 31.8071 17.9667 31.735 18.1412C31.6628 18.3158 31.5569 18.4744 31.4233 18.608C31.2897 18.7416 31.1311 18.8475 30.9565 18.9197C30.782 18.9918 30.5949 19.0289 30.406 19.0286V19.0286Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <FooterContacts />
                        </div>
                    </div>

                </div>
                <div className="uk-flex uk-flex-middle uk-flex-center">
                    <p className="uk-margin-remove">Узнай где самые выгодные цены!</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;