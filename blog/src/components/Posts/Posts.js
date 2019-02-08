import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts, deletePost } from '../../store/actions'
import Moment from 'react-moment'

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
                        <div className="jumbotron hoverable" key={post._id}>
                            <h2 className="card-title h2">{post.title}</h2>
                            <hr />
                            <p className="card-text">{post.text}</p>
                            <div className="text-right">Date: <Moment format="DD/MM/YYYY">{post.updatedAt}</Moment></div>


                            {logged &&
                                <span>
                                    {/* If only the owner of the post can delete the post */}
                                    {/* {user.id === post.user && */}
                                    <span>
                                        <button className="btn btn-danger btn-md" onClick={(event) => this.onDeletePost(event)} value={JSON.stringify(post)}>Delete</button>
                                        <button className="btn btn-primary btn-md">Edit</button>
                                    </span>
                                    {/* } */}
                                </span>
                            }

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