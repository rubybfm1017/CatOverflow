import React from 'react';

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

    render() { 
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                
                <label>
                    Body
                    <textarea
                    value={this.state.body}
                    onChange={this.update('body')}
                    />
                </label>

                <button type='submit' value={this.props.formType} textarea='post your answer'/>
                </form>
            </div>
        )
  }
    
}
 
export default AnswerForm