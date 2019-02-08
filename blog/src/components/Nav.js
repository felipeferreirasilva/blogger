import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
    render() {
        let logged = Object.keys(this.props.user).length > 0 ? true : false
        let user = this.props.user
        return (
            <div className="mb-4">
                <nav className="mb-1 navbar navbar-expand-md navbar-dark primary-color">
                    <Link className="navbar-brand" to="/">Blogger</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {logged &&
                                <li className="nav-item">
                                    <Link className="nav-link" to="/posts/new">New Post</Link>
                                </li>
                            }
                        </ul>

                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item dropdown">
                                <span className="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    {!logged ?
                                        <span id="user-menu">Login </span>
                                        :
                                        <span id="user-menu">{user.name} </span>
                                    }
                                </span>
                                <div className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                                    {!logged ?
                                        <div>
                                            <Link className="dropdown-item" to="/users/signin">Sign In</Link>
                                            <Link className="dropdown-item" to="/users/signup">Sign Up</Link>
                                        </div>
                                        :
                                        <div>
                                            <Link className="dropdown-item" to="/users/logout">Log out</Link>
                                        </div>
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Nav)