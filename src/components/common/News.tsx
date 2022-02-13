import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

/**
 * Блок "Новости" на главной странице
 * @returns JSX
 */
const News: FC = () => {
	return(
        <div className="news uk-flex uk-flex-between uk-flex-stretch uk-flex-between uk-margin">
            <div className="uk-width-1-1 uk-width-1-4@l">
                <div>
                    <Link to="/">
                        <img src={"./img/news/news-big.png"} alt="Новости" />
                    </Link>
                </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-4@l">
                <div>
                    <Link to="/">
                        <img src={"./img/news/news-1.png"} alt="Новость 1" />
                    </Link>
                </div>
                <div>
                    <h5>22.06.2021</h5>
                    <h3><Link to="/" title="Мандарины в России подорожают после 12 августа">Мандарины в России подорожают после 12 августа</Link></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar duis sed non quam. Mauris eu egestas sed pharetra. Nunc vitae odio vivamus cursus nibh eu libero. Accumsan, amet, mi tempus scelerisque eleifend bibendum in aliquam nunc. 
                    </p>
                    <Link to="/">Подробнее</Link>
                </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-4@l">
                <div>
                    <Link to="/">
                        <img src={"./img/news/news-2.png"} alt="Новость 2" />
                    </Link>
                </div>
                <div>
                    <h5>22.06.2021</h5>
                    <h3><Link to="/" title="Самый популярный товар в России летом 2021">Самый популярный товар в России летом 2021</Link></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar duis sed non quam. Mauris eu egestas sed pharetra. Nunc vitae odio vivamus cursus nibh eu libero. Accumsan, amet, mi tempus scelerisque eleifend bibendum in aliquam nunc. 
                    </p>
                    <Link to="/">Подробнее</Link>
                </div>
            </div>
            <div className="uk-width-1-1 uk-width-1-4@l">
                <div>
                    <Link to="/">
                        <img src={"./img/news/news-3.png"} alt="Новость 3" />
                    </Link>
                </div>
                <div>
                    <h5>22.06.2021</h5>
                    <h3><Link to="/" title="Все полезные качества авокадо">Все полезные качества авокадо</Link></h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar duis sed non quam. Mauris eu egestas sed pharetra. Nunc vitae odio vivamus cursus nibh eu libero. Accumsan, amet, mi tempus scelerisque eleifend bibendum in aliquam nunc. 
                    </p>
                    <Link to="/">Подробнее</Link>
                </div>
            </div>
        </div>
    );
};

export default News;