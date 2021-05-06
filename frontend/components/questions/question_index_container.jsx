import { connect } from 'react-redux'
import questionIndex from './question_index'
import { fetchQuestions, receiveSearch } from '../../actions/questions_actions'
import { deleteQuestion } from '../../actions/questions_actions'

const mapStateToProps = (state) => {
    let questions = Object.values(state.questions)
    let searchTerm = state.search.term

    questions = questions.filter(question => question && question.title)

    if (questions && searchTerm) {
        questions = questions.filter(question => question.title.includes(searchTerm))
    }

    return {
        questions,
        searchTerm
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteQuestion: questionId => dispatch(deleteQuestion(questionId)),
    clearSearch: () => dispatch(receiveSearch(""))
})

export default connect(mapStateToProps, mapDispatchToProps)(questionIndex)
