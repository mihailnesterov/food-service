import React, {FC} from 'react';
import { Link } from 'react-router-dom';
/*import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

var notifications = UIkit.notification('MyMessage', 'danger')*/

const Chevron = () => {
    return(
        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.51053 7.51157C7.51099 7.74522 7.42961 7.97165 7.28053 8.15157L2.28053 14.1516C2.11079 14.3558 1.86688 14.4842 1.60245 14.5086C1.33803 14.533 1.07475 14.4513 0.870529 14.2816C0.666313 14.1118 0.537889 13.8679 0.513509 13.6035C0.489129 13.3391 0.570791 13.0758 0.740529 12.8716L5.22053 7.51157L0.90053 2.15156C0.817464 2.04928 0.755432 1.93158 0.718 1.80524C0.680569 1.6789 0.668475 1.54641 0.682414 1.41538C0.696353 1.28436 0.73605 1.15737 0.799224 1.04174C0.862398 0.926099 0.947803 0.824087 1.05053 0.741565C1.15335 0.649985 1.27398 0.580626 1.40485 0.537833C1.53572 0.495041 1.67403 0.479738 1.81109 0.492881C1.94815 0.506023 2.08102 0.54733 2.20138 0.614213C2.32174 0.681096 2.42699 0.772116 2.51053 0.881566L7.34053 6.88157C7.46605 7.06665 7.5259 7.28846 7.51053 7.51157Z" fill="#A8A8A8"/>
        </svg>
    );
}

/**
 * Хлебные крошки в избранном (aside слева)
 * @returns JSX
 */
const BreadcrumbsFavorits: FC = () => {
	return(
        <ul className="uk-breadcrumb catalog-breadcrumb">
            <li><Link to="/">Главная</Link> <Chevron /></li>
            <li><span className="uk-active">Избранные товары</span></li>
        </ul>
    );
};

export default BreadcrumbsFavorits;