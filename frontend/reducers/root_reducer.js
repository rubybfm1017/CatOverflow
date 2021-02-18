import UserReducer from './user_reducer'
import ErrorReducer from './error_reducer';
import { combineReducers } from "redux"
import QuestionsReducer from './questions_reducer';

const rootReducer = combineReducers({
    users: UserReducer,
    errors: ErrorReducer,
    questions: QuestionsReducer
});

export default rootReducer
