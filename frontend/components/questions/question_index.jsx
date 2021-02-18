import React from 'react';
import CreateQuestionFormContainer from './create_question_form_container';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';

class questionIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
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
                    {this.props.questions.map((question) => (
                        <QuestionIndexItem
                            question={question}
                            key={question.id}
                        />
                    ))}
                </div>
                    <nav>
                        <Link to="/questions/ask">
                            <button id="button" type="button">
                                Ask Question
                            </button>
                        </Link>
                    </nav>
            </div>
         );
    }
}
 
export default questionIndex;