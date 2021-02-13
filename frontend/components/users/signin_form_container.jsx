import { connect } from 'react-redux'
import { signin } from '../../actions/user_actions'
import { clearError } from '../../actions/error_actions'
import UserForm from './user_form'

const mapStateToProps = (state) => ({
    user: state.users.current_user,
    formType: 'User Sign In',
    error: state.errors.error
})

const mapDispatchToProps = dispatch => ({
    submitForm: user => dispatch(signin(user)),
    clearErrors: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm)
