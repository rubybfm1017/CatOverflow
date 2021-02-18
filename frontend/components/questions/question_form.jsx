import React from 'react';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createQuestion(this.state)
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() { 
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Title
                    <input
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>
                <label>
                    Body
                    <textarea
                    value={this.state.body}
                    onChange={this.update('body')}
                    />
                </label>
                <button type='submit' value={this.props.formType} />
                </form>
            </div>
        )
  }
    
}
 
export default QuestionForm