import { connect } from 'react-redux';
import AnswerShow from './answer_show';
import { fetchAnswer } from '../../actions/answers_actions';


const mapStateToProps = (state, ownProps) => ({
  answer: state.answers[ownProps.match.params.answerId]
});

const mapDispatchToProps = dispatch => ({
  fetchAnswer: answerId => dispatch(fetchAnswer(answerId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerShow);