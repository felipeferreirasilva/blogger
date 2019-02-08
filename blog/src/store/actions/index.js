import axios from 'axios'
import { API_URL } from '../../utils/api'

export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_SIGNIN = 'USER_SIGNIN'
export const CREATE_POST = 'CREATE_POST'
export const GET_POSTS = 'GET_POSTS'

export const signUp = newUser => {
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
            })
            .catch(error => {
                console.log(error.response.data)
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
                history.push('/')
            })
            .catch(error => {
                console.log(error.response.data)
            });
    }
}

export const createPost = (user, post, history) => {
    return dispatch => {
        axios.post(`${API_URL}/api/users/${user.id}/posts`, post, {
            headers: { Authorization: `Bearer ${user.token}` }
        })
            .then(() => {
                dispatch({
                    type: CREATE_POST
                })
                history.push('/')
            })
            .catch(error => {
                console.log(error.response.data)
            });
    }
}

export const getPosts = () => {
    return dispatch => {
        axios.get(`${API_URL}/api/posts`)
            .then(response => {
                console.log(response.data)
                dispatch({
                    type: GET_POSTS,
                    posts: response.data
                })
            })
            .catch(error => {
                console.log(error.response.data)
            });
    }
}

