import React, { Component } from 'react'
import { checkIfIsLogged } from '../../utils/checkIfIsLogged'
import { connect } from 'react-redux'
import { createPost, removeError } from '../../store/actions'
import Error from '../Error'

class NewPost extends Component {
    state = {
        title: '',
        post: ''
    }

    componentDidMount() {
        if (!checkIfIsLogged(this.props.user)) {
            this.props.history.push('/')
        }
    }

    onChangeTitle = event => {
        this.setState({
            title: event.target.value
        })
    }

    onChangePost = event => {
        this.setState({
            post: event.target.value
        })
    }

    onSubmitForm = event => {
        let user = this.props.user
        let post = { title: this.state.title, text: this.state.post, user: user.id }
        let history = this.props.history
        this.props.dispatch(createPost(user, post, history))
        event.preventDefault()
    }

    render() {
        let hasError = Object.keys(this.props.error).length > 0 ? true : false
        let error = this.props.error

        this.props.history.listen(() => {
            this.props.dispatch(removeError())
        })
        return (
            <div className="container">
                <div className="jumbotron">
                    {hasError &&
                        <Error error={error} />
                    }
                    <h2 className="h1-responsive font-weight-bold text-center">New Post</h2>
                    <div className="row">
                        <div className="col-md-12 mb-md-0 mb-5">
                            <form id="post-form" name="post-form">
                                <div className="md-form">
                                    <input type="text" id="title" name="title" className="form-control" onChange={(event) => this.onChangeTitle(event)} value={this.state.title} />
                                    <label htmlFor="title" className="">Title</label>
                                </div>
                                <div className="md-form">
                                    <textarea type="text" id="post" name="post" rows="7" className="form-control md-textarea" onChange={(event) => this.onChangePost(event)} value={this.state.post}></textarea>
                                    <label htmlFor="post">Post</label>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <button className="btn btn-primary" onClick={(event) => this.onSubmitForm(event)}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(NewPost)