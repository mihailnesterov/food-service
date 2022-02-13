import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';

const Open = () => {

    return(
        <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="2" rx="1" fill="white"/>
            <rect y="6" width="32" height="2" rx="1" fill="white"/>
            <rect y="12" width="32" height="2" rx="1" fill="white"/>
        </svg>
    );
}

const Close = () => {
    return(
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="23" width="32" height="2" rx="1" transform="rotate(-45 1 23)" fill="white"/>
            <rect x="2" width="32" height="2" rx="1" transform="rotate(45 2 0)" fill="white"/>
        </svg>
);
}

const CatalogButton: FC<any> = (props : any) => {
    const {isMenuOpen, setMenuOpen} = props;

    //const [isMenuOpen, setMenuOpen] = useState<boolean | null>(false);

	return(
        <Link to="#">
            <button 
                onClick={() => setMenuOpen(!isMenuOpen)} 
                className="btn-catalog uk-button uk-button-primary uk-flex uk-flex-middle uk-flex-center"
                style={{maxHeight:"52px",minWidth:"153px"}}
            >
                <span>
                    {
                        isMenuOpen ? <Close /> : <Open />
                    }                    
                </span>
                <span>Каталог</span>
            </button>
        </Link>
    );
};

export default CatalogButton;