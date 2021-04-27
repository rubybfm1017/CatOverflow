import { connect } from 'react-redux'
import questionIndex from './question_index'
import { fetchQuestions } from '../../actions/questions_actions'
import { deleteQuestion } from '../../actions/questions_actions'

const mapStateToProps = (state) => {
    let questions = Object.values(state.questions)
    let searchTerm = state.search.term

    if (questions && searchTerm) {
        questions = questions.filter(question => question.title && question.title.includes(searchTerm))
    }

    return {
        questions,
        searchTerm
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: questionId => dispatch(deleteQuestion(questionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(questionIndex)
