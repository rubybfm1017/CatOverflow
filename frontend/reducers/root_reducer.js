import UserReducer from './user_reducer'
import { combineReducers } from "redux"

const rootReducer = combineReducers({
    users: UserReducer
});

export default rootReducer
