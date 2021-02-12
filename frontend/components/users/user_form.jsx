import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
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
          <button type='submit' value={this.props.formType} />
        </form>
      </div>
    );
  }
}

export default UserForm;
