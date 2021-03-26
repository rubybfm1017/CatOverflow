import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { fetchQuestion } from '../../actions/questions_actions';


const mapStateToProps = (state, ownProps) => ({
  question: state.questions[ownProps.match.params.questionId],
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: questionId => dispatch(fetchQuestion(questionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);