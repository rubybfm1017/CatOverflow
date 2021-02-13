import thunk from "redux-thunk"
import * as user_api_util from '../util/user_api_util';
import { clearError, receiveError } from './error_actions';

export const SIGNIN_USER = 'SIGNIN_USER'
export const SIGNOUT_USER = 'SIGNOUT_USER'
export const SIGNUP_USER = 'SIGNUP_USER'



export const signinUser = (user) => ({
    type:SIGNIN_USER,
    user
})

export const signoutUser = () => ({
    type:SIGNOUT_USER
})

export const signupUser = (user) => ({
    type:SIGNUP_USER,
    user
})



export const signup = (user) => dispatch =>{
    return user_api_util.createUser(user)
        .then(
            (user) =>  { 
                dispatch(clearError())
                dispatch(signupUser(user))
            },
            (error) => dispatch(receiveError(error.responseJSON))
        )
}
export const signin = (user) => dispatch =>{
    return user_api_util.createSession(user)
        .then(
            (user) => {
                dispatch(clearError())
                dispatch(signinUser(user))
            },
            (error) => dispatch(receiveError(error.responseJSON))
        )
}

export const signout = () => dispatch =>{
    return user_api_util.destroySession()
        .then(() => dispatch(signoutUser()))
}
