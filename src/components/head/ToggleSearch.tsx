import React, {FC, useState, useEffect} from 'react';
import Button from '../common/Button';
import { useHistory } from "react-router-dom";

const ToggleSearch: FC = () => {

    const history = useHistory();

    const [searchType, setSearchType] = useState<number | null>(1);
    useEffect(() => {
        const searchInput = document.querySelector('.search-input');
        searchType === 1 && searchInput && searchInput.setAttribute('placeholder', 'Найти товары...');
        searchType === 2 && searchInput && searchInput.setAttribute('placeholder', 'Найти магазины...');
        handleGoToCatalog();
    }, [searchType]);
    
    const handleGoToCatalog = () => {
        history.push("/catalog");
    }

	return(
        <div className="uk-button-group uk-flex uk-flex-middle uk-flex-center uk-flex-nowrap toggle-search">
            <Button 
                type="button"
                classlist={searchType === 1 ? "uk-button-primary" : "uk-button-default"}
                onClick={() => setSearchType(1)}
                text="Поиск товаров"
            />
            <Button 
                type="button"
                classlist={searchType === 1 ? "uk-button-default" : "uk-button-primary"}
                onClick={() => setSearchType(2)}
                text="Поиск магазинов"
            />
        </div>
    );
};

export default ToggleSearch;