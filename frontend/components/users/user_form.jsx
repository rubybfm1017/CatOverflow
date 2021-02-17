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
        <Link className="primary" to="/">Homepage</Link>
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
              Password
              <input
                type='text'
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <div className="button-area" style={{width: '100%'}}>
              {this.props.formType != 'User Sign Up' ? (
                  <button className="login__form__btn" style={{
                    backgroundColor: '#cccccc',
                    color: 'white',
                    marginBottom: '5px'
                  }} onClick={this.demoSignin}>Demo User</button>
                ) : null}
              {this.props.formType != 'User Sign Up' ? (
                  <button className="login__form__btn" type='submit' value={this.props.formType}>Sign in</button>
                ) : <button className="login__form__btn" type='submit' value={this.props.formType}>Sign up</button>}

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
