import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../store/actions'

class Posts extends Component {
    componentDidMount() {
        this.props.dispatch(getPosts())
    }
    render() {
        let posts = (this.props.posts)
        return (
            <div className="container">
                {Object.keys(posts).length > 0 &&
                    posts.map(post => (
                        <div className="jumbotron" key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.text}</p>
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