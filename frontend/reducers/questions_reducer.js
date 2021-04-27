import { RECEIVE_ALL_QUESTIONS,
         RECEIVE_QUESTION,
         REMOVE_QUESTION, 
         RECEIVE_SEARCH
} from '../actions/questions_actions';

import {
    RECEIVE_ANSWER
} from '../actions/answers_actions';

import {
    RECEIVE_VOTE,
    REMOVE_VOTE
} from '../actions/votes_actions';


const QuestionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, oldState, action.questions)
 
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, { [action.question.id]: action.question })

        case RECEIVE_ANSWER:
            return Object.assign({}, oldState, { [action.question.id]: action.question })

        case RECEIVE_VOTE:
            return Object.assign({}, oldState, { [action.question.id]: action.question })

        case REMOVE_VOTE:
            return Object.assign({}, oldState, { [action.question.id]: action.question })
            
        case REMOVE_QUESTION:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.questionId]
            return nextState

        case RECEIVE_SEARCH:
            return Object.assign({}, oldState, { searchTerm: action.term })

        default:
            return oldState
    }
}

export default QuestionsReducer;