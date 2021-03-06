import React, {FC, useState} from 'react';

const HeadContacts: FC = () => {

    const [phone] = useState<string>('8 800 3000 500');

	return(
        <div className="uk-flex uk-flex-middle uk-flex-wrap">
            <button className="uk-button uk-button-link city-button">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_13:5054)">
                    <path d="M12.5 0.5C7.50356 0.5 3.45312 4.55042 3.45312 9.54688C3.45312 11.2178 3.78018 12.9436 4.71874 14.1875L12.5 24.5L20.2812 14.1875C21.1337 13.0577 21.5469 11.0604 21.5469 9.54688C21.5469 4.55042 17.4964 0.5 12.5 0.5ZM12.5 5.73974C14.6023 5.73974 16.3071 7.44456 16.3071 9.54686C16.3071 11.6492 14.6023 13.354 12.5 13.354C10.3977 13.354 8.69288 11.6492 8.69288 9.54688C8.69288 7.44456 10.3977 5.73974 12.5 5.73974Z" fill="#5CC97B"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_13:5054">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
                    </clipPath>
                    </defs>
                </svg>
                <span title="Выбрать город">город Москва</span>
            </button>
            <a href={`tel:${phone.replace(/\s/g, "")}`} className="phone-link">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5595 13.8776C11.559 15.3325 12.8602 16.5443 14.3716 17.428L16.8523 16.019C16.9246 15.9843 17.0055 15.9728 17.0841 15.986C17.1627 15.9991 17.2354 16.0363 17.2925 16.0927L20.9007 19.4388C21.0388 19.559 21.1474 19.7106 21.2179 19.8815C21.2883 20.0524 21.3188 20.2379 21.3068 20.4234C21.2948 20.609 21.2407 20.7894 21.1488 20.9505C21.0568 21.1116 20.9296 21.2489 20.7771 21.3517L18.5565 22.9501C18.2385 23.1791 17.8704 23.3246 17.485 23.3737C17.0996 23.4227 16.709 23.3737 16.348 23.2312C12.7451 21.8185 9.61139 19.3977 7.30508 16.2455C5.06443 13.0768 3.77787 9.3066 3.60148 5.3924C3.58457 5.00263 3.66669 4.61434 3.83988 4.26514C4.01307 3.91594 4.27146 3.61768 4.59 3.39927L6.88403 1.78878C7.0273 1.68129 7.19233 1.60809 7.36677 1.57465C7.54121 1.54122 7.72054 1.54842 7.89133 1.59571C8.06211 1.64301 8.21994 1.72917 8.35297 1.84776C8.48601 1.96634 8.59081 2.11427 8.65954 2.28047L10.6748 6.81928C10.7106 6.89125 10.7227 6.97321 10.7094 7.05308C10.696 7.13295 10.6579 7.2065 10.6006 7.26289L8.45709 9.14787C8.804 10.8664 9.52217 12.4821 10.5595 13.8776Z" fill="#5CC97B"/>
                </svg>
                <span title="Позвонить">{phone}</span>
            </a>
        </div>
    );
};

export default HeadContacts;