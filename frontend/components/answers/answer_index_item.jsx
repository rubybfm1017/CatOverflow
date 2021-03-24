import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const AnswerIndexItem = ({ answer, questionId }) => {
    return (
        <ListGroupItem className="answer-item">
        <div className="answer-votes-desc">
            <div className="voting answer-voting">
            </div>
            <p className="answer-desc">{answer.body}</p>
        </div>
        </ListGroupItem>
    )
}

export default AnswerIndexItem;
