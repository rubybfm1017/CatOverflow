import { connect } from 'react-redux'
import questionIndex from './question_index'
import { fetchQuestions } from '../../actions/questions_actions'
import { deleteQuestion } from '../../actions/questions_actions'

const mapStateToProps = (state) => ({
    questions: Object.values(state.questions)
})

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: questionId => dispatch(deleteQuestion(questionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(questionIndex)
