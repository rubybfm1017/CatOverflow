import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import AnswerIndexItem from './answer_index_item';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() { 
        //debugger
        const { answers,
            deleteAnswer, 
            updateAnswer,
            currentUser,
            questionId,
            createVote,
            deleteVote,
          } = this.props;

        return (
            <section>
                <h4 className="answer-title">Answers</h4>
                <ListGroup variant="flush">
                {answers.map((answer) => (
                    <AnswerIndexItem key={answer.id}
                                answer={answer}
                                currentUser={currentUser}
                                deleteAnswer={deleteAnswer}
                                updateAnswer={updateAnswer}
                                questionId={questionId}
                                createVote={createVote}
                                deleteVote={deleteVote}
                    />
                ))}
                </ListGroup>
            </section>
        );
    }
}
 
export default AnswerIndex;