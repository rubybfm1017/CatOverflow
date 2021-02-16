import React from 'react';
import { Link } from "react-router-dom";

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user

    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoSignin = this.demoSignin.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  demoSignin(event) {
    event.preventDefault()

    this.props.submitForm({
        username: 'demo',
        password: '123456'
    })
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div className="login">
        <h3>{this.props.formType}</h3>
        <div className="login__form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username
            <input
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
            />
          </label>
          <label>
            password
             <input
              type='text'
              value={this.state.password}
              onChange={this.update('password')}
            />
          </label>
          <div className="button-area">
            {this.props.formType != 'User Sign Up' ? (
                <button onClick={this.demoSignin}>Demo User</button>
              ) : null}
            
          <button type='submit' value={this.props.formType}>OK</button>

          </div>
        </form>
        <div style={{marginLeft: '25px'}}>
          {this.props.formType != 'User Sign Up' ? (
              <p className="session-help">Don't have an account? <Link className="primary" to="/signup">Sign up</Link></p>
            ) : (
              <p className="session-help">Already have an account? <Link className="primary" to="/signin">Sign in</Link></p>
            )}
          </div>
        </div>
        {this.props.error != null ? (
          <div style={{color: 'red', marginTop: '10px'}}>
            <ul>
              {this.props.error.map((err, i) => (
                  <li key={`error-${i}`}>{err}</li>
              ))}
            </ul>
          </div>  
        ) : null }
      </div>
    );
  }
}

export default UserForm;
