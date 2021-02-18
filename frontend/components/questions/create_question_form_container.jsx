import { connect } from 'react-redux'
import QuestionForm from './question_form'
import { createQuestion } from '../../actions/questions_actions'

const mapStateToProps = (state) => ({
    question:{
        title: '',
        body: ''
    },
    formType: 'Create Question'
})

const mapDispatchToProps = dispatch => ({
    createQuestion: question => dispatch(createQuestion(question))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm)
