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
                        <div className="card hoverable">
                            <div className="card-header">
                                <h2 className="h2-responsive font-weight-bold mt-2">{this.state.post[0].title}</h2>
                            </div>
                            <div className="card-body">
                            <i className="far fa-calendar-alt mr-2"></i><Moment format="DD/MM/YYYY">{this.state.post[0].updatedAt}</Moment><i className="far fa-clock ml-3 mr-2"></i><Moment format="HH:mm">{this.state.post[0].updatedAt}</Moment>
                                <hr />
                                <div className="text-justify" style={{ whiteSpace: "pre-wrap" }}>{this.state.post[0].text}</div>
                            </div>
                        </div>
                        <Link to='/' className="btn btn-primary waves-effect waves-light float-right mb-4 mt-3">Back</Link>
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