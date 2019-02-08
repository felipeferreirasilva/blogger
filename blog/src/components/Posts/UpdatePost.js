import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkIfIsLogged } from '../../utils/checkIfIsLogged'
import { updatePost } from '../../store/actions'

class UpdatePost extends Component {
    state = {
        title: '',
        post: ''
    }

    componentDidMount() {
        if (!checkIfIsLogged(this.props.user)) {
            this.props.history.push('/')
        } else {
            let postId = this.props.match.params.id
            let post = this.props.posts.filter(post => post._id === postId)
            this.setState({
                title: post[0].title,
                post: post[0].text
            })
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
        let postId = this.props.match.params.id
        let newPost = { title: this.state.title, text: this.state.post, user: user.id }
        let history = this.props.history
        this.props.dispatch(updatePost(user, postId, newPost, history))
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h2 className="h1-responsive font-weight-bold text-center">Update Post</h2>
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
                                <button className="btn btn-primary waves-effect waves-light" onClick={(event) => this.onSubmitForm(event)}>Update</button>
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

export default connect(mapStateToProps)(UpdatePost)