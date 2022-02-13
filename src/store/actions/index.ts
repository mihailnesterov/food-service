import * as UserActionCreators from './user';
import * as CartActionCreators from './cart';

// собираем вместе все action creators
const ActionCreators = {
    ...UserActionCreators,
    ...CartActionCreators,
}

export default ActionCreators;