import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavbarContainer from '../nav/navbar';

class QuestionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.question

        this.handleSubmit = this.handleSubmit.bind(this)
        this.update = this.update.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const { history } = this.props;
        this.props.createQuestion(this.state).then(() => {
            history.push('/questions')
        });
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    render() { 
        return (
            <div className="question-form__header">
                <NavbarContainer/>
                
                <h3>{this.props.formType}</h3>
                <br/>
                <br/>

                <div className="login__form" style={{"margin":"auto"}}>
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
                        <input
                            type='text'
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                        </label>
                        <div className="button-area" style={{width: '100%'}}>
                            <button className="login__form__btn" type='submit' value={this.props.formType}>Ask A Question</button>
                        </div>
                    </form>
                    <Link className="primary" to="/questions" style={{"margin-left": "100px"}}>All questions</Link>
                </div>

            </div>
        )
  }
    
}
 
export default withRouter(QuestionForm);