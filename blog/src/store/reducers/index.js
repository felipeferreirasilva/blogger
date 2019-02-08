import { USER_SIGNUP, USER_SIGNIN, CREATE_POST, GET_POSTS } from '../actions'
import { combineReducers } from 'redux'

const user = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNUP:
            return action.user
        case USER_SIGNIN:
            return action.user
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

export default combineReducers({
    user,
    posts
})