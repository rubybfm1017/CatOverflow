import * as votes_util from '../util/votes_util'

export const RECEIVE_VOTE = 'RECEIVE_VOTE'
export const REMOVE_VOTE = 'REMOVE_VOTE'

export const receiveVote = (question) => ({
  type:RECEIVE_VOTE,
  question
})

export const removeVote = (question) => ({
  type:REMOVE_VOTE,
  question
})

export const createVote = (questionId, answerId) => dispatch => (
  votes_util.createVote(questionId, answerId)
    .then((question) => dispatch(receiveVote(question)))
)

export const deleteVote = (questionId, answerId) => dispatch => (
  votes_util.deleteVote(questionId, answerId)
    .then((question) => dispatch(removeVote(question)))
)
