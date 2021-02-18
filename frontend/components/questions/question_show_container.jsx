import { connect } from 'react-redux';
import QuestionShow from './question_show';
import { fetchQuestion } from '../../actions/questions_actions';


const mapStateToProps = (state, ownProps) => ({
  question: state.questions[ownProps.match.params.QuestionId]
});

const mapDispatchToProps = dispatch => ({
  fetchQuestion: QuestionId => dispatch(fetchQuestion(QuestionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);