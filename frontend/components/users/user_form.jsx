import React from 'react';

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


  render() {
    return (
      <div>
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          {this.props.error != null ? (
                <div>
                    <p className='errorMsg'>
                        {this.props.error}
                    </p>
                </div> 
            ) : null }
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
          <button onClick={this.demoSignin}>Demo User</button>
          <button type='submit' value={this.props.formType}>OK</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
