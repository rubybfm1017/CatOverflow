import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
} from 'react-icons/ti';

class AnswerIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleUpvote = this.handleUpvote.bind(this);
        this.handleDownvote = this.handleDownvote.bind(this);
    }

    handleUpvote(e) {
        e.preventDefault();
        this.props.createVote(this.props.questionId, this.props.answer.id)
    }

    handleDownvote(e) {
        e.preventDefault();
        this.props.deleteVote(this.props.questionId, this.props.answer.id)
    }

    render() {
        let totalVotes = 0
        if (this.props.answer.votes) {
            totalVotes = this.props.answer.votes.length
        }
        return (
            <ListGroupItem className="answer-item">
            <div className="answer-votes-desc">
                <div className="voting answer-voting">
                    <TiArrowSortedUp
                        id="up-arrow-outline-answer"
                        className={`up-answer-arrow-selected-${this.props.answer.id}`}
                        onClick={this.handleUpvote}
                    />
                    <p className="voting-score">{totalVotes}</p>
                    <TiArrowSortedDown
                        id="down-arrow-outline-answer"
                        className={`down-answer-arrow-selected-${this.props.answer.id}`}
                        onClick={this.handleDownvote}
                    />
                </div>
                <p className="answer-desc">{this.props.answer.body}</p>
            </div>
            </ListGroupItem>
        )
    }
}

export default AnswerIndexItem;
