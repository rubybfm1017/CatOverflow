import UserReducer from './user_reducer'
import ErrorReducer from './error_reducer';
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    users: UserReducer,
    errors: ErrorReducer
});

export default rootReducer
