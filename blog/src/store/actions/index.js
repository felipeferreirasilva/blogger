import axios from 'axios'
import { API_URL } from '../../utils/api'

export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_SIGNIN = 'USER_SIGNIN'
export const LOGOUT_USER = 'LOGOUT_USER'
export const CREATE_POST = 'CREATE_POST'
export const UPDATE_POST   = 'UPDATE_POST'
export const GET_POSTS = 'GET_POSTS'
export const DELETE_POST = 'DELETE_POST'
export const ADD_ERROR = 'ADD_ERROR'
export const REMOVE_ERROR = 'REMOVE_ERROR'

export const signUp = (newUser, history) => {
    return dispatch => {
        axios.post(`${API_URL}/api/auth/signup`, newUser)

            //   name: 'joao',
            //   email: 'joao@gmail.com',
            //   password: 'mudar123'

            .then(function (response) {
                dispatch({
                    type: USER_SIGNUP,
                    user: response.data
                })
                setLocalUser(response.data)
                history.push('/')
            })
            .catch(error => {
                dispatch(addError(error.response.data.error.message))
            });
    }
}

export const signIn = (user, history) => {
    return dispatch => {
        axios.post(`${API_URL}/api/auth/signin`, user)
            .then(response => {
                dispatch({
                    type: USER_SIGNIN,
                    user: response.data
                })
                setLocalUser(response.data)
                history.push('/')
            })
            .catch(error => {
                dispatch(addError(error.response.data.error.message))
            });
    }
}

export const createPost = (user, post, history) => {
    return dispatch => {
        axios.post(`${API_URL}/api/posts/${user.id}/post`, post, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => {
                dispatch({
                    type: CREATE_POST
                })
                history.push('/')
            })
            .catch(error => {
                dispatch(addError(error.response.data.error.message))
            });
    }
}

export const updatePost = (user, postId, newPost, history) => {
    return dispatch => {
        axios.put(`${API_URL}/api/posts/${user.id}/post/${postId}`, newPost, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
        .then(response => {
            dispatch({
                type: UPDATE_POST,
                post: response.data
            })
            history.push('/')
        })
        .catch(error => {
            dispatch(addError(error.response.data.error.message))
        })
    }
}

export const getPosts = () => {
    return dispatch => {
        axios.get(`${API_URL}/api/posts`)
            .then(response => {
                dispatch({
                    type: GET_POSTS,
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error)
                // dispatch(addError(error.response.data.error.message))
            });
    }
}

export const deletePost = (user, postId) => {
    return dispatch => {
        axios.delete(`${API_URL}/api/posts/${user.id}/post/${postId}`, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
        .then(() => {
            dispatch({
                type: DELETE_POST
            })
            dispatch(getPosts())
        })
        .catch(error => {
            dispatch(addError(error.response.data.error.message))
        });
    }
}

export const setLocalUser = user => {
    localStorage.setItem('user', JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        token: user.token
    }))
}

export const logout = () => {
    localStorage.clear()
    return{
        type: LOGOUT_USER
    }
}

export const addError = error => {
    return {
        type: ADD_ERROR,
        error
    }
}

export const removeError = () => {
    return {
        type: REMOVE_ERROR
    }
}

