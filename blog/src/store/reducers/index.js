import { USER_SIGNUP, USER_SIGNIN, CREATE_POST, GET_POSTS, ADD_ERROR, REMOVE_ERROR, LOGOUT_USER } from '../actions'
import { combineReducers } from 'redux'

const getPreviousUser = () => {
    let user = JSON.parse(localStorage.getItem('user'))
    let logged = user !== null ? true : false
    if(logged){
        return user
    }else{
        return {}
    }
}

const user = (state = getPreviousUser(), action) => {
    switch (action.type) {
        case USER_SIGNUP:
            return action.user
        case USER_SIGNIN:
            return action.user
        case LOGOUT_USER:
            let newState = {}
            return newState
        default:
            return state
    }
}

const posts = (state = {}, action) => {
    switch (action.type) {
        case CREATE_POST:
            return state
        case GET_POSTS:
            return action.posts
        default:
            return state
    }
}

const error = (state = {}, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return action.error
        case REMOVE_ERROR:
            let newState = {}
            return  newState
        default:
            return state
    }
}

export default combineReducers({
    user,
    posts,
    error
})