import {
    RECEIVE_ANSWER
} from '../actions/answers_actions';

import {
    RECEIVE_VOTE,
    REMOVE_VOTE
} from '../actions/votes_actions';

const AnswersReducer = (oldState = {} , action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ANSWER:
            return Object.assign({}, oldState, { [action.answer.id]: action.answer })
        case RECEIVE_VOTE:
            return Object.assign({}, oldState, { [action.answer.id]: action.answer })
        case REMOVE_VOTE:
            return Object.assign({}, oldState, { [action.answer.id]: action.answer })
        default:
            return oldState
    }
}

export default AnswersReducer