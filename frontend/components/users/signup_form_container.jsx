import { connect } from 'react-redux'
import { clearError } from '../../actions/error_actions'
import { signup } from '../../actions/user_actions'
import UserForm from './user_form'

const mapStateToProps = (state) => ({
    user: {
        username: '',
        password: ''
    },
    formType: 'User Sign Up',
    error: state.errors.error
})

const mapDispatchToProps = dispatch => ({
    submitForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearError())
    
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
