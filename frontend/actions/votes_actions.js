import * as votes_util from '../util/votes_util'

export const RECEIVE_VOTE = 'RECEIVE_VOTE'
export const REMOVE_VOTE = 'REMOVE_VOTE'

export const receiveVote = (answer) => ({
  type:RECEIVE_VOTE,
  answer
})

export const removeVote = (answer) => ({
  type:REMOVE_VOTE,
  answer
})

export const createVote = (questionId, answerId) => dispatch => (
  votes_util.createVote(questionId, answerId)
    .then((answer) => dispatch(receiveVote(answer)))
)

export const deleteVote = (questionId, answerId) => dispatch => (
  votes_util.deleteVote(questionId, answerId)
    .then((answer) => dispatch(removeVote(answer)))
)
