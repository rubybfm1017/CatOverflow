import React from 'react';
import { Link } from 'react-router-dom';


const QuestionIndexItem = props => (
  <li>
    <Link to={`/questions/${props.question.id}`}>{props.question.title}</Link>
  </li>
);

export default QuestionIndexItem;
