import {
    RECEIVE_ANSWER
} from '../actions/answers_actions';

const AnswersReducer = (oldState = {} , action) => {
    Object.freeze(oldState)

    switch (action.type) {
        case RECEIVE_ANSWER:
            return Object.assign({}, oldState, { [action.answer.question_id]: action.answer })

        default:
            return oldState
    }
}

export default AnswersReducer