import * as answers_util from '../util/answers_util'

export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'
export const REMOVE_ANSWER = 'REMOVE_ANSWER'

export const receiveAnswer = answer => ({
  type:RECEIVE_ANSWER,
  answer
})

export const removeAnswer = answerId => ({
  type:REMOVE_ANSWER,
  answerId
})


export const fetchAnswer = answerId => dispatch => (
  answers_util.fetchAnswer(answerId)
    .then(answer => dispatch(receiveAnswer(answer)))
)

export const createAnswer = (answer, questionId) => dispatch => (
  answers_util.createAnswer(answer, questionId)
    .then(answer => dispatch(receiveAnswer(answer)))
)

// export const deleteAnswer = answerId => dispatch => (
//   answers_util.deleteAnswer(answerId)
//     .then(() => dispatch(receiveAnswer(answerId)))
// )