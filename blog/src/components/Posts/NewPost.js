import React, { Component } from 'react'
import { checkIfIsLogged } from '../../utils/checkIfIsLogged'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions'

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
        let post = { title: this.state.title, text: this.state.post, user: user.id}
        let history = this.props.history
        this.props.dispatch(createPost(user, post, history))
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <section className="mb-4">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">New Post</h2>
                    <div className="row">
                        <div className="col-md-12 mb-md-0 mb-5">
                            <form id="post-form" name="post-form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="title" name="title" className="form-control" onChange={(event) => this.onChangeTitle(event)} value={this.state.title} />
                                            <label htmlFor="title" className="">Title</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea type="text" id="post" name="post" rows="7" className="form-control md-textarea" onChange={(event) => this.onChangePost(event)} value={this.state.post}></textarea>
                                            <label htmlFor="post">Post</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="text-center text-md-left">
                                <button className="btn btn-primary" onClick={(event) => this.onSubmitForm(event)}>Create</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(NewPost)