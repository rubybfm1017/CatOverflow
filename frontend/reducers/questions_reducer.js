import { RECEIVE_ALL_QUESTIONS,
         RECEIVE_QUESTION,
         REMOVE_QUESTION
} from '../actions/questions_actions';


const QuestionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return Object.assign({}, oldState, action.questions)
 
        case RECEIVE_QUESTION:
            return Object.assign({}, oldState, { [action.question.id]: action.question })
            
        case REMOVE_QUESTION:
            let nextState = Object.assign({}, oldState);
            delete nextState[action.questionId]
            return nextState
        default:
            return oldState
    }
}

export default QuestionsReducer;