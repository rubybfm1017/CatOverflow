import React from 'react';
import CreateQuestionFormContainer from './create_question_form_container';
import QuestionIndexItem from './question_index_item';
import { Link } from 'react-router-dom';
import NavbarContainer from '../nav/navbar';


class questionIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        this.props.fetchQuestions()
    }
    
    render() { 
        return ( 
            <div className="questions-index-grid" >
                <NavbarContainer />
                <br/>
                <Link className="primary" to="/">Homepage</Link>
                <div className="questions-index__top">
                    <h3>All Questions</h3>
                </div>
                <div className="questions-index__info">
                    {this.props.questions.map((question) => (
                        <QuestionIndexItem
                            question={question}
                            key={question.id}
                        />
                    ))}
                </div>
                    <nav>
                        <Link to="/questions/ask">
                            <button className="questions-index__top__btn" id="button" type="button">
                                Ask Question
                            </button>
                        </Link>
                    </nav>
            </div>
         );
    }
}
 
export default questionIndex;