import React from 'react';
import { Link } from 'react-router-dom';
import AnswerFormContainer from '../answers/create_answer_form_container';
import AnswerIndexContainer from '../answers/answer_index_container';
import NavbarContainer from '../nav/navbar';


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
      <div className="questions-show-grid">
        <NavbarContainer/>
        <br/>
         <div className="question-show-body__question">
            <h1>{question.title}</h1>
            <p>{question.body}</p>
        </div>
        
        <div className="answer-component-div">
          < AnswerIndexContainer answers={question.answers}/>
          < AnswerFormContainer questionId={question.id}/>
        </div>
        <Link to="/" />
      </div>
    );
  }
}

export default QuestionShow;

