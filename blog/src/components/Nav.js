import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
    render() {
        let logged = Object.keys(this.props.user).length > 0 ? true : false
        let user = this.props.user
        return (
            <nav className="navbar navbar-expand-md fixed-top scrolling-navbar navbar-dark indigo">
                <Link className="navbar-brand" to="/"><i className="fas fa-book-open mr-2"></i>Blogger</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar"
                    aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link waves-effect waves-light" to="/">Home</Link>
                        </li>
                        {logged &&
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts/new">New Post</Link>
                            </li>
                        }
                    </ul>

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <span className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user mr-2"></i>
                                {!logged ?
                                    <span id="user-menu">Login </span>
                                    :
                                    <span id="user-menu">{user.name} </span>
                                }
                            </span>
                            <div className="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink">
                                {!logged ?
                                    <div>
                                        <Link className="dropdown-item" to="/users/signin">Log In</Link>
                                        <Link className="dropdown-item" to="/users/signup">Register</Link>
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
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Nav)