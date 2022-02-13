import React, {FC} from 'react';

/**
 * Готовые корзины продуктов со скидкой
 * @returns JSX
 */
const DiscountProductCart: FC = () => {
	return(
        <div className="uk-text-center uk-margin uk-padding"
        style={{
            border: "0px red solid", 
        }}>
            <h2>Готовые корзины продуктов со скидкой</h2>
            <div className="discount-carts">

                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="32" fill="#F8F8FA"/>
                    <path d="M36.0743 22.6303C36.3859 22.6297 36.6878 22.7382 36.9276 22.937C37.0627 23.0489 37.1743 23.1864 37.2561 23.3415C37.3379 23.4966 37.3883 23.6664 37.4044 23.841C37.4205 24.0156 37.402 24.1917 37.3499 24.3592C37.2978 24.5267 37.2133 24.6822 37.101 24.817L31.1276 31.9636L36.8876 39.1236C36.9984 39.26 37.0811 39.4169 37.131 39.5854C37.1809 39.7538 37.1971 39.9305 37.1785 40.1052C37.1599 40.2799 37.107 40.4492 37.0227 40.6034C36.9385 40.7576 36.8246 40.8936 36.6876 41.0036C36.5497 41.125 36.3881 41.2166 36.2131 41.2725C36.0381 41.3285 35.8534 41.3477 35.6706 41.329C35.4878 41.3102 35.3109 41.2538 35.1509 41.1634C34.9909 41.073 34.8514 40.9505 34.741 40.8036L28.301 32.8036C28.1049 32.565 27.9977 32.2658 27.9977 31.957C27.9977 31.6481 28.1049 31.3489 28.301 31.1103L34.9676 23.1103C35.1014 22.9489 35.2713 22.8214 35.4636 22.738C35.6559 22.6546 35.8651 22.6177 36.0743 22.6303Z" fill="#262626"/>
                </svg>

                <div className="cart-item">
                    <img src="./img/carts/cart-1.png" alt="cart 1" />
                    <div className="cart-bottom">
                        
                        <div>
                            <h4>Витаминный микс</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>

                        <div>
                            <s>2500 ₽</s>
                            <h3>1440 ₽</h3>
                        </div>

                    </div>
                </div>

                <div className="cart-item">
                    <img src="./img/carts/cart-1.png" alt="cart 1" />
                    <div className="cart-bottom">
                        
                        <div>
                            <h4>Витаминный микс</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>

                        <div>
                            <s>2500 ₽</s>
                            <h3>1440 ₽</h3>
                        </div>

                    </div>
                </div>

                <div className="cart-item">
                    <img src="./img/carts/cart-1.png" alt="cart 1" />
                    <div className="cart-bottom">
                        
                        <div>
                            <h4>Витаминный микс</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>

                        <div>
                            <s>2500 ₽</s>
                            <h3>1440 ₽</h3>
                        </div>

                    </div>
                </div>

                <div className="cart-item">
                    <img src="./img/carts/cart-1.png" alt="cart 1" />
                    <div className="cart-bottom">
                        
                        <div>
                            <h4>Витаминный микс</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>

                        <div>
                            <s>2500 ₽</s>
                            <h3>1440 ₽</h3>
                        </div>

                    </div>
                </div>

                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="64" height="64" rx="32" fill="#F8F8FA"/>
                    <path d="M29.3334 41.3336C29.0218 41.3342 28.7199 41.2257 28.48 41.0269C28.345 40.915 28.2334 40.7775 28.1516 40.6224C28.0698 40.4673 28.0194 40.2975 28.0033 40.1229C27.9872 39.9482 28.0057 39.7721 28.0578 39.6047C28.1098 39.4372 28.1944 39.2816 28.3067 39.1469L34.28 32.0002L28.52 24.8402C28.4093 24.7039 28.3266 24.5469 28.2767 24.3785C28.2267 24.21 28.2106 24.0334 28.2292 23.8587C28.2478 23.684 28.3007 23.5147 28.385 23.3605C28.4692 23.2063 28.5831 23.0703 28.72 22.9602C28.858 22.8389 29.0195 22.7473 29.1946 22.6913C29.3696 22.6353 29.5543 22.6161 29.7371 22.6349C29.9199 22.6537 30.0968 22.7101 30.2568 22.8005C30.4167 22.8909 30.5563 23.0133 30.6667 23.1602L37.1067 31.1602C37.3028 31.3988 37.41 31.6981 37.41 32.0069C37.41 32.3157 37.3028 32.615 37.1067 32.8536L30.44 40.8536C30.3063 41.0149 30.1364 41.1425 29.9441 41.2259C29.7518 41.3093 29.5426 41.3462 29.3334 41.3336Z" fill="#262626"/>
                </svg>
                
            </div>
            {/*
            <div 
                className="uk-position-relative uk-visible-toggle uk-light" 
                data-uk-slider
                tabIndex={-1} 
                style={{
                    border: "1px green solid", 
                    height:"350px",
                }}
            >

                <div className="uk-slider-container">
                    <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                    <li>
                        <img src="images/slider1.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>1</h1></div>
                        </li>
                        <li>
                            <img src="images/slider2.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>2</h1></div>
                        </li>
                        <li>
                            <img src="images/slider3.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>3</h1></div>
                        </li>
                        <li>
                            <img src="images/slider4.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>4</h1></div>
                        </li>
                        <li>
                            <img src="images/slider5.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>5</h1></div>
                        </li>
                        <li>
                            <img src="images/slider1.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>6</h1></div>
                        </li>
                        <li>
                            <img src="images/slider2.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>7</h1></div>
                        </li>
                        <li>
                            <img src="images/slider3.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>8</h1></div>
                        </li>
                        <li>
                            <img src="images/slider4.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>9</h1></div>
                        </li>
                        <li>
                            <img src="images/slider5.jpg" alt="" />
                            <div className="uk-position-center uk-panel"><h1>10</h1></div>
                        </li>
                    </ul>
                </div>

            </div>
            */}
        </div>
    );
};

export default DiscountProductCart;