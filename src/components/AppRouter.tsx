import React, {FC} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {privateRoutes, publicRoutes, RouteNames} from '../routes';

const AppRouter: FC = () => {

    const {isAuthorized} = useTypedSelector(state => state.auth);
    const {ERROR404, LOGIN} = RouteNames;

	return(
        isAuthorized 
        ?
        <Switch>
            {privateRoutes.map(route => 
                <Route 
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
            )}
            {<Redirect to={ERROR404} />}
        </Switch>
        :
        <Switch>
            {publicRoutes.map(route => 
                <Route 
                    key={route.path}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                />
            )}
            {<Redirect to={ERROR404} />}
        </Switch>
    );
};

export default AppRouter;