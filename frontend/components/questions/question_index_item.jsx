import React from 'react';
import { Link } from 'react-router-dom';


const QuestionIndexItem = props => {
  const { question } = props;

  let numAnswers = question.answers.length

  return (
    <>
      <div id="index-item">
        <div className="question-stats">
          <div className="stat-answer-section">
            <span className="stat-num">{numAnswers}</span>
            <span className="stat-label">answers</span>
          </div>
        </div>
        <div className="question-preview">
          <div className="question-preview-title">
            <Link to={`/questions/${question.id}`} className="question-preview-title-text">{question.title}</Link>
          </div>
          <div className="question-preview-body">
            {question.body}
          </div>
        </div>
      </div>
    </>
  )
};

export default QuestionIndexItem;
