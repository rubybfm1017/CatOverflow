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

    componentWillUnmount() {
        this.props.clearSearch()
    }
    
    render() { 
        return ( 
            <div className="questions-index-grid" >
                <NavbarContainer />
                <br/>
                <div id="questions-list" className="questions-index__info">
                    {this.props.questions.map((question) => (
                        <QuestionIndexItem
                            question={question}
                            key={question.id}
                        />
                    ))}
                </div>
                <div id="question-list-nav">
                    <Link to="/questions/ask">
                        <button className="questions-index__top__btn" id="button" type="button">
                            Ask Question
                        </button>
                    </Link>
                </div>
            </div>
         );
    }
}
 
export default questionIndex;