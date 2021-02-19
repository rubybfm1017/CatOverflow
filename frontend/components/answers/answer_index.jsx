import React from 'react';

class AnswerIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() { 
        //debugger
        return ( 
            <div>
                <div>
                    <h3>All Answers</h3>
                </div>
                <div>
                    <ul>
                        {this.props.answers.map((answer) => (
                            <li key={answer.id}>{answer.body}</li>
                        ))}
                    </ul>
                </div>
            </div>
         );
    }
}
 
export default AnswerIndex;