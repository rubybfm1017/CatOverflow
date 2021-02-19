import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/create_answer_form_container';
import AnswerIndexContainer from '../answers/answer_index_container';

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  componentDidUpdate() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    const { question, newAnswer } = this.props;
  
    //debugger
    return (
      <div>
        <h1>{question.title}</h1>
        <p>{question.body}</p>
        < AnswerIndexContainer answers={question.answers}/>
        < AnswerFormContainer questionId={question.id}/>
        <Link to="/" />
      </div>
    );
  }
}

export default QuestionShow;

