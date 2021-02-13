import { initial } from 'lodash';
import {
    RECEIVE_ERROR,
    CLEAR_ERROR
} from '../actions/error_actions';

const initialState = {
}

const ErrorReducer = (oldState = initialState, action) => {
    Object.freeze(oldState)
    
    switch (action.type) {
        case RECEIVE_ERROR:
            return Object.assign({}, oldState, { 
                error: action.error
            });

        case CLEAR_ERROR:
            return initialState

        default:
            return oldState

    }
}

export default ErrorReducer;
