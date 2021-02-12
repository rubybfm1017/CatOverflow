import {
    SIGNIN_USER,
    SIGNOUT_USER,
    SIGNUP_USER
} from '../actions/user_actions';

const initialState = {
    current_user: {
        username: '',
        password: ''
    },
    signedIn: false
}

const UserReducer = (oldState = initialState, action) => {
    Object.freeze(oldState)
    let nextState = Object.assign({}, oldState)

    switch (action.type) {
        case SIGNIN_USER:
            return Object.assign({}, oldState, { 
                current_user: action.user,
                signedIn: true
            });

        case SIGNUP_USER:
            return Object.assign({}, oldState, { 
                current_user: action.user,
                signedIn: true
            });

        case SIGNOUT_USER:
            return initialState

        default:
            return oldState

    }
}

export default UserReducer;
