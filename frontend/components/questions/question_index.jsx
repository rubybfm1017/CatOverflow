import React from 'react';
import CreateQuestionFormContainer from './create_question_form_container';

class questionIndex extends React.Component {
    
    componentDidMount() {
        this.props.fetchQuestions()
    }
    
    render() { 
        return ( 
            <div>
                <div>
                    <h3>All Questions</h3>
                </div>
                <div>
                    {this.props.questions.map((question, i) => (
                        <li key={`question-${i}`}>{question.title}</li>
                    ))}
                </div>
                <CreateQuestionFormContainer />
            </div>
         );
    }
}
 
export default questionIndex;