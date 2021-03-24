import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


class AnswerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.answer

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createAnswer(this.state, this.props.questionId)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    loggedIn() {
        return (
            <div>
                <h4 className="your-answer-title">Your Answer</h4>
                <form onSubmit={this.handleSubmit}>
                <textarea className="new-answer-textarea"
                    cols="30"
                    rows="8"
                    onChange={this.update("body")} />
                <Button variant="success" type="submit">Post Your Answer</Button>
                </form>
            </div>
        );
    }

    notLoggedIn() {
        return (
            <div>
                <h4 className="your-answer-title">Your Answer</h4>
                <Link to="/login">
                <Button variant="primary">Please Log In to Answer</Button>
                </Link>
            </div>
        );
    }

    render() { 
        const { currentUser } = this.props; 

        return (
            <section className="new-answer-component">
            {
                currentUser ? this.loggedIn() : this.notLoggedIn()
            }
            </section>
        )
    }
    
}
 
export default AnswerForm