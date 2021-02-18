import * as questions_util from '../util/questions_util'

export const RECEIVE_ALL_QUESTIONS = 'RECEIVE_ALL_QUESTIONS'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const REMOVE_QUESTION = 'REMOVE_QUESTION'


export const receiveAllQuestions = questions => ({
    type:RECEIVE_ALL_QUESTIONS,
    questions
})

export const receiveQuestion = question => ({
  type:RECEIVE_QUESTION,
  question
})

export const removeQuestion = questionId => ({
  type:REMOVE_QUESTION,
  questionId
})

export const fetchQuestions = () => dispatch => {
  return questions_util.fetchQuestions()
      .then(questions => dispatch(receiveAllQuestions(questions)))
}

export const fetchQuestion = questionId => dispatch => (
  questions_util.fetchQuestion(questionId)
    .then(question => dispatch(receiveQuestion(question)))
)

export const createQuestion = question => dispatch => (
  questions_util.createQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
)

export const updateQuestion = question => dispatch => (
  questions_util.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)))
)

export const deleteQuestion = questionId => dispatch => (
  questions_util.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
)