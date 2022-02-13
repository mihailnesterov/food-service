import React, {FC} from 'react';
import { Link } from 'react-router-dom';

/**
 * Слайдер на главной странице
 * @returns JSX
 */
const Slider: FC = () => {
	return(
        <div>
            <div className="slider-discount">
                <div className="slides">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" rx="32" fill="#F8F8FA"/>
                        <path d="M36.0743 22.6303C36.3859 22.6297 36.6878 22.7382 36.9276 22.937C37.0627 23.0489 37.1743 23.1864 37.2561 23.3415C37.3379 23.4966 37.3883 23.6664 37.4044 23.841C37.4205 24.0156 37.402 24.1917 37.3499 24.3592C37.2978 24.5267 37.2133 24.6822 37.101 24.817L31.1276 31.9636L36.8876 39.1236C36.9984 39.26 37.0811 39.4169 37.131 39.5854C37.1809 39.7538 37.1971 39.9305 37.1785 40.1052C37.1599 40.2799 37.107 40.4492 37.0227 40.6034C36.9385 40.7576 36.8246 40.8936 36.6876 41.0036C36.5497 41.125 36.3881 41.2166 36.2131 41.2725C36.0381 41.3285 35.8534 41.3477 35.6706 41.329C35.4878 41.3102 35.3109 41.2538 35.1509 41.1634C34.9909 41.073 34.8514 40.9505 34.741 40.8036L28.301 32.8036C28.1049 32.565 27.9977 32.2658 27.9977 31.957C27.9977 31.6481 28.1049 31.3489 28.301 31.1103L34.9676 23.1103C35.1014 22.9489 35.2713 22.8214 35.4636 22.738C35.6559 22.6546 35.8651 22.6177 36.0743 22.6303Z" fill="#262626"/>
                    </svg>


                    <div className="slide">
                        <Link to="/product">
                            <img src="./img/slider/slide-1.png" alt="slide 1" />
                        </Link>
                    </div>
                    <div className="slide">
                        <Link to="/product">
                            <img src="./img/slider/slide-1.png" alt="slide 2" />
                        </Link>
                    </div>
                    <div className="slide">
                        <Link to="/product">
                            <img src="./img/slider/slide-1.png" alt="slide 3" />
                        </Link>
                    </div>
                    
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="64" height="64" rx="32" fill="#F8F8FA"/>
                        <path d="M29.3334 41.3336C29.0218 41.3342 28.7199 41.2257 28.48 41.0269C28.345 40.915 28.2334 40.7775 28.1516 40.6224C28.0698 40.4673 28.0194 40.2975 28.0033 40.1229C27.9872 39.9482 28.0057 39.7721 28.0578 39.6047C28.1098 39.4372 28.1944 39.2816 28.3067 39.1469L34.28 32.0002L28.52 24.8402C28.4093 24.7039 28.3266 24.5469 28.2767 24.3785C28.2267 24.21 28.2106 24.0334 28.2292 23.8587C28.2478 23.684 28.3007 23.5147 28.385 23.3605C28.4692 23.2063 28.5831 23.0703 28.72 22.9602C28.858 22.8389 29.0195 22.7473 29.1946 22.6913C29.3696 22.6353 29.5543 22.6161 29.7371 22.6349C29.9199 22.6537 30.0968 22.7101 30.2568 22.8005C30.4167 22.8909 30.5563 23.0133 30.6667 23.1602L37.1067 31.1602C37.3028 31.3988 37.41 31.6981 37.41 32.0069C37.41 32.3157 37.3028 32.615 37.1067 32.8536L30.44 40.8536C30.3063 41.0149 30.1364 41.1425 29.9441 41.2259C29.7518 41.3093 29.5426 41.3462 29.3334 41.3336Z" fill="#262626"/>
                    </svg>

                </div>
                
                <div className="dotnav">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_0_1" fill="white">
                        <path d="M8 0.748448C8 0.335092 7.66417 -0.00363183 7.25262 0.0349837C6.04099 0.148671 4.86775 0.537692 3.82414 1.17635C2.56712 1.94561 1.547 3.04715 0.876354 4.35944C0.205703 5.67174 -0.0894235 7.14378 0.0235337 8.61318C0.136491 10.0826 0.653141 11.4922 1.51649 12.6866C2.37983 13.881 3.55632 14.8136 4.91616 15.3817C6.27599 15.9498 7.76633 16.1313 9.22275 15.906C10.6792 15.6808 12.0451 15.0576 13.1697 14.1052C14.1035 13.3146 14.8408 12.3225 15.3288 11.2077C15.4945 10.829 15.2782 10.4039 14.8857 10.2743V10.2743C14.4932 10.1446 14.0738 10.3601 13.8999 10.7352C13.5039 11.5895 12.9256 12.3505 12.2024 12.9629C11.2882 13.737 10.1779 14.2436 8.99396 14.4267C7.81005 14.6098 6.59858 14.4623 5.49318 14.0005C4.38779 13.5387 3.43143 12.7806 2.72963 11.8097C2.02783 10.8388 1.60785 9.6929 1.51603 8.49844C1.4242 7.30399 1.66411 6.10738 2.20927 5.04063C2.75444 3.97389 3.58367 3.07846 4.6055 2.45313C5.41378 1.95849 6.31773 1.64806 7.25319 1.53992C7.66381 1.49245 8 1.1618 8 0.748448V0.748448Z"/>
                        </mask>
                        <path d="M8 0.748448C8 0.335092 7.66417 -0.00363183 7.25262 0.0349837C6.04099 0.148671 4.86775 0.537692 3.82414 1.17635C2.56712 1.94561 1.547 3.04715 0.876354 4.35944C0.205703 5.67174 -0.0894235 7.14378 0.0235337 8.61318C0.136491 10.0826 0.653141 11.4922 1.51649 12.6866C2.37983 13.881 3.55632 14.8136 4.91616 15.3817C6.27599 15.9498 7.76633 16.1313 9.22275 15.906C10.6792 15.6808 12.0451 15.0576 13.1697 14.1052C14.1035 13.3146 14.8408 12.3225 15.3288 11.2077C15.4945 10.829 15.2782 10.4039 14.8857 10.2743V10.2743C14.4932 10.1446 14.0738 10.3601 13.8999 10.7352C13.5039 11.5895 12.9256 12.3505 12.2024 12.9629C11.2882 13.737 10.1779 14.2436 8.99396 14.4267C7.81005 14.6098 6.59858 14.4623 5.49318 14.0005C4.38779 13.5387 3.43143 12.7806 2.72963 11.8097C2.02783 10.8388 1.60785 9.6929 1.51603 8.49844C1.4242 7.30399 1.66411 6.10738 2.20927 5.04063C2.75444 3.97389 3.58367 3.07846 4.6055 2.45313C5.41378 1.95849 6.31773 1.64806 7.25319 1.53992C7.66381 1.49245 8 1.1618 8 0.748448V0.748448Z" stroke="#5CC97B" strokeWidth="2" mask="url(#path-1-inside-1_0_1)"/>
                        <circle cx="8" cy="8" r="4" fill="#5CC97B"/>
                    </svg>


                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#E3E3E3"/>
                    </svg>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#E3E3E3"/>
                    </svg>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#E3E3E3"/>
                    </svg>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#E3E3E3"/>
                    </svg>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#E3E3E3"/>
                    </svg>
                </div>
            </div>
        
        {/*<div 
            className="uk-position-relative uk-visible-toggle uk-light" 
            tabIndex={-1} 
            data-uk-slider="{center:true}"
            style={{
                border: "1px red solid", 
                height:"400px",
                background: "url(../img/slider/slider-1.png)",
            }}
        >

            <ul className="uk-slider-items uk-grid">
                <li className="uk-width-3-4">
                    <div className="uk-panel">
                        <img src="/img/slider/slider-1.png" alt="" />
                        <div className="uk-position-center uk-panel"><h1>1</h1></div>
                    </div>
                </li>
                <li className="uk-width-3-4">
                    <div className="uk-panel">
                        <img src="/img/slider/slider-1.png" alt="" />
                        <div className="uk-position-center uk-panel"><h1>2</h1></div>
                    </div>
                </li>
                <li className="uk-width-3-4">
                    <div className="uk-panel">
                        <img src="./img/slider/slider-1.png" alt="" />
                        <div className="uk-position-center uk-panel"><h1>3</h1></div>
                    </div>
                </li>
                <li className="uk-width-3-4">
                    <div className="uk-panel">
                        <img src="/img/slider/slider-1.png" alt="" />
                        <div className="uk-position-center uk-panel"><h1>4</h1></div>
                    </div>
                </li>
                <li className="uk-width-3-4">
                    <div className="uk-panel">
                        <img src="/img/slider/slider-1.png" alt="" />
                        <div className="uk-position-center uk-panel"><h1>5</h1></div>
                    </div>
                </li>
            </ul>

            <a 
                className="uk-position-center-left uk-position-small uk-hidden-hover" 
                href="#" 
                data-uk-slidenav-previous={true} 
                data-uk-slider-item="previous"></a>
            <a 
                className="uk-position-center-right uk-position-small uk-hidden-hover" 
                href="#" 
                data-uk-slidenav-next={true} 
                data-uk-slider-item="{next}"></a>
            
        </div>*/}
        </div>
    );
};

export default Slider;