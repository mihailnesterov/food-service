import React, {FC, ReactElement} from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import products from '../../data/products.json';

UIkit.use(Icons);

interface IProducts {
    id: number;
    name: string;
    description?: string;
    img?: string;
    price: number;
}

interface ISearchDropDownProps {
    searchValue?: string;
    clearSearchValue: () => void;
}

const SearchDropDown: FC<ISearchDropDownProps> = (props: ISearchDropDownProps) => {

    const {searchValue, clearSearchValue} = props;

    const handleAddToCart = (product: any) => {
        const productName = product.name;
        const productPrice = product.price;
        UIkit.notification({
            message: `<span data-uk-icon='icon: check'></span> <small style='color: #2a2a2a'>${productName} ${productPrice} ₽ добавлен в корзину</small>`,
            status: 'success',
            pos: 'top-right',
            timeout: 4000
        });
    }

	return(
        <div className="uk-position-right uk-animation-slide-top-small">
            {
                products.map((item: IProducts): ReactElement => 
                    <div key={item.id} className="product-add-to-cart">
                        <div><Link to="/product" onClick={clearSearchValue}><img src={item.img} alt={item.name} /></Link></div>
                        <div>
                            <p><Link to="/product" onClick={clearSearchValue}>{item.name}</Link></p>
                            <p><Link to="/product" onClick={clearSearchValue}>{item.description}</Link></p>
                        </div>
                        <div>
                            <Button 
                                type="button"
                                classlist={"uk-button-primary"}
                                style={{
                                    padding: "0",
                                    height: "auto",
                                    color: "#43B727",
                                    backgroundColor: "#fff",
                                    border: 0,
                                }}
                                onClick={() => {
                                    handleAddToCart(item);
                                    clearSearchValue();
                                }}
                                text={
                                    <>
                                        <span>В корзину</span>
                                        <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790178 0.551088 0 0.75 0H3C3.1673 4.62172e-05 3.32978 0.056026 3.4616 0.159037C3.59342 0.262048 3.68701 0.406176 3.7275 0.5685L4.335 3H21.75C21.8639 3.00003 21.9763 3.02602 22.0787 3.07598C22.1811 3.12594 22.2708 3.19857 22.3409 3.28836C22.411 3.37814 22.4598 3.48272 22.4834 3.59416C22.5071 3.7056 22.5051 3.82096 22.4775 3.9315L20.2275 12.9315C20.187 13.0938 20.0934 13.238 19.9616 13.341C19.8298 13.444 19.6673 13.5 19.5 13.5H6C5.8327 13.5 5.67022 13.444 5.5384 13.341C5.40658 13.238 5.31299 13.0938 5.2725 12.9315L2.415 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790176 1.13968 0 0.948912 0 0.75ZM4.71 4.5L6.585 12H18.915L20.79 4.5H4.71ZM7.5 16.5C7.10218 16.5 6.72064 16.658 6.43934 16.9393C6.15804 17.2206 6 17.6022 6 18C6 18.3978 6.15804 18.7794 6.43934 19.0607C6.72064 19.342 7.10218 19.5 7.5 19.5C7.89782 19.5 8.27936 19.342 8.56066 19.0607C8.84196 18.7794 9 18.3978 9 18C9 17.6022 8.84196 17.2206 8.56066 16.9393C8.27936 16.658 7.89782 16.5 7.5 16.5ZM4.5 18C4.5 17.2044 4.81607 16.4413 5.37868 15.8787C5.94129 15.3161 6.70435 15 7.5 15C8.29565 15 9.05871 15.3161 9.62132 15.8787C10.1839 16.4413 10.5 17.2044 10.5 18C10.5 18.7956 10.1839 19.5587 9.62132 20.1213C9.05871 20.6839 8.29565 21 7.5 21C6.70435 21 5.94129 20.6839 5.37868 20.1213C4.81607 19.5587 4.5 18.7956 4.5 18ZM18 16.5C17.6022 16.5 17.2206 16.658 16.9393 16.9393C16.658 17.2206 16.5 17.6022 16.5 18C16.5 18.3978 16.658 18.7794 16.9393 19.0607C17.2206 19.342 17.6022 19.5 18 19.5C18.3978 19.5 18.7794 19.342 19.0607 19.0607C19.342 18.7794 19.5 18.3978 19.5 18C19.5 17.6022 19.342 17.2206 19.0607 16.9393C18.7794 16.658 18.3978 16.5 18 16.5ZM15 18C15 17.2044 15.3161 16.4413 15.8787 15.8787C16.4413 15.3161 17.2044 15 18 15C18.7956 15 19.5587 15.3161 20.1213 15.8787C20.6839 16.4413 21 17.2044 21 18C21 18.7956 20.6839 19.5587 20.1213 20.1213C19.5587 20.6839 18.7956 21 18 21C17.2044 21 16.4413 20.6839 15.8787 20.1213C15.3161 19.5587 15 18.7956 15 18Z" fill="#43B727"/>
                                        </svg>
                                    </>
                                }
                            />
                            <h4>{item.price} ₽</h4>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SearchDropDown;