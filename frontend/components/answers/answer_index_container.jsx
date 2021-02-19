import { connect } from 'react-redux'
import answerIndex from './answer_index'
import { deleteAnswer } from '../../actions/answers_actions'

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({
    deleteAnswer: answerId => dispatch(deleteAnswer(answerId))
})

export default connect(mapStateToProps, mapDispatchToProps)(answerIndex)
