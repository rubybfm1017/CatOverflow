import UserReducer from './user_reducer'
import ErrorReducer from './error_reducer';
import { combineReducers } from "redux"
import QuestionsReducer from './questions_reducer';
import AnswersReducer from './answers_reducer';
import SearchReducer from './search_reducer';

const rootReducer = combineReducers({
    users: UserReducer,
    errors: ErrorReducer,
    questions: QuestionsReducer,
    answers: AnswersReducer,
    search: SearchReducer
});

export default rootReducer
