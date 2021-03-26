import { connect } from 'react-redux'
import answerIndex from './answer_index'
import { deleteAnswer } from '../../actions/answers_actions'
import { createVote, deleteVote } from '../../actions/votes_actions'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
    createVote: (questionId, answerId) => dispatch(createVote(questionId, answerId)),
    deleteVote: (questionId, answerId) => dispatch(deleteVote(questionId, answerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(answerIndex)
