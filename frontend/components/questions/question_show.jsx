import React from 'react';
import { Link } from 'react-router-dom';

class QuestionShow extends React.Component {
  componentDidMount() {
    this.props.fetchQuestion(this.props.match.params.questionId);
  }

  render() {
    const { question } = this.props;

    return (
      <div>
        <h1>{question.title}</h1>
        <p>{question.body}</p>
        <Link to="/" />
      </div>
    );
  }
}

export default QuestionShow;

