import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';

interface IMenuItems {
    id: number;
    to: string;
    title: string | React.Component;
}
const menuItems: IMenuItems[] = [
    {id: 1, to: "/about", title:"О сайте"},
    {id: 2, to: "/shops", title:"Магазины"},
    {id: 3, to: "/parners", title:"Партнерам"},
    {id: 4, to: "/ads", title:"Реклама"},
    {id: 5, to: "/info", title:"Юридическая информация"},
    {id: 6, to: "/agreement", title:"Соглашения"},
];

const MainMenu: FC = () => {

    const [selectedItem, setSelectedItem] = useState<number | null>(null);

	return(
        <nav className="uk-navbar-container uk-navbar-transparent" data-uk-navbar>
            <div className="uk-navbar-item uk-flex-middle">
                <Link className="uk-navbar-toggle uk-hidden@l" to="#">
                    <span data-uk-navbar-toggle-icon></span>
                </Link>
                <ul className="uk-navbar-nav uk-visible@l">
                    {
                        menuItems.map((item: IMenuItems) => 
                            <li key={item.id}
                                className={
                                    selectedItem && selectedItem === item.id ? 
                                    "uk-active" : 
                                    undefined
                                }
                            >
                                <Link to={item.to} 
                                    onClick={() => setSelectedItem(item.id)}
                                >{item.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
};

export default MainMenu;