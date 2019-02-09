import React, { Component } from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

class ViewPost extends Component {
    state = {
        post: undefined
    }

    componentDidMount() {
        let postId = this.props.match.params.id
        let post = this.props.posts.filter(post => post._id === postId)
        this.setState({
            post: post
        })
    }

    render() {
        return (
            <div>
                {this.state.post !== undefined &&
                    <div className="container">
                        <div className="jumbotron">
                            <div className="text-right mb-3"><strong>Date:</strong> <Moment format="DD/MM/YYYY hh:mm">{this.state.post[0].updatedAt}</Moment></div>
                            <h2 className="h2-responsive font-weight-bold mb-4">{this.state.post[0].title}</h2>
                            <div className="text-justify" style={{ whiteSpace: "pre-wrap" }}>{this.state.post[0].text}</div>
                        </div>
                        <Link to='/' className="btn btn-primary waves-effect waves-light float-right mb-4">Back</Link>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(ViewPost)