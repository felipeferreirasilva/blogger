import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, deletePost } from '../../store/actions'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

class Posts extends Component {
    componentDidMount() {
        this.props.dispatch(getPosts())
    }

    onDeletePost = event => {
        let user = this.props.user
        let post = JSON.parse(event.target.value)
        this.props.dispatch(deletePost(user, post._id))
    }
    render() {
        let posts = this.props.posts
        let logged = Object.keys(this.props.user).length > 0 ? true : false
        // let user = this.props.user

        return (
            <div className="container">
                {Object.keys(posts).length > 0 &&
                    posts.map(post => (
                        <div className="card mb-4 hoverable" key={post._id}>
                            <div className="card-header">
                            <i className="far fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{post.updatedAt}</Moment><i className="far fa-clock ml-3 mr-2"></i><Moment format="HH:mm">{post.updatedAt}</Moment>
                            </div>
                            <div className="card-body">
                                <Link to={`/posts/view/${post._id}`} className="text-reset"><h2 className="card-title">{post.title}</h2></Link>
                                <div className="card-text text-justify d-block text-truncate">{post.text}</div>
                                <hr />
                                <Link to={`/posts/view/${post._id}`} className="btn btn-primary btn-md waves-effect waves-light">Read More</Link>
                                {logged &&
                                    <span>
                                        {/* If only the owner of the post can delete */}
                                        {/* {user.id === post.user && */}
                                        <span>
                                            <button className="btn btn-danger btn-md waves-effect waves-light" onClick={(event) => this.onDeletePost(event)} value={JSON.stringify(post)}>Delete</button>
                                            <Link to={`/posts/update/${post._id}`}><button className="btn btn-default btn-md waves-effect waves-light">Edit</button></Link>
                                        </span>
                                        {/* } */}
                                    </span>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Posts)