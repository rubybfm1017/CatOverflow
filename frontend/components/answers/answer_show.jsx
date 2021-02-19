import React from 'react';
import { Link } from 'react-router-dom';

class AnswerShow extends React.Component {
  componentDidMount() {
    this.props.fetchAnswer(this.props.match.params.answerId);
  }

  render() {
    const { answer } = this.props;

    return (
      <div>
        <p>{answer.body}</p>
        
        <Link to="/" />
      </div>
    );
  }
}

export default AnswerShow;

