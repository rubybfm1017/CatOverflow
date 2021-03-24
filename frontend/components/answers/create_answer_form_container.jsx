import { connect } from 'react-redux'
import AnswerForm from './answer_form'
import { createAnswer } from '../../actions/answers_actions'

const mapStateToProps = (state) => ({
    answer:{
        body: ''
    },
    formType: 'Answer Question',
    currentUser: state.users.current_user
})

const mapDispatchToProps = dispatch => ({
    createAnswer: (answer, questionId) => dispatch(createAnswer(answer, questionId))
})

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm)
