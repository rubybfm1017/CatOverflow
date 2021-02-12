import { connect } from 'react-redux'
import { signup } from '../../actions/user_actions'
import UserForm from './user_form'

const mapStateToProps = (state) => ({
    user: {
        username: '',
        password: ''
    },
    formType: 'User Sign Up'
})

const mapDispatchToProps = dispatch => ({
    submitForm: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
