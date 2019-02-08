import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions'

class Signin extends Component {
    state = {
        email: '',
        password: ''
    }

    onChangeEmail = event => {
        this.setState({
            email: event.target.value
        })
    }

    onChangePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    onSubmitForm = event => {    
        let user = { email: this.state.email, password: this.state.password }
        let history = this.props.history
        this.props.dispatch(signIn(user, history))
        event.preventDefault()
    }

    render() {
        return (
            <div className="container">
                <form className="text-center border border-light p-5">
                    <p className="h4 mb-4">Sign in</p>
                    <input type="email" id="email" className="form-control mb-4" placeholder="E-mail" onChange={(event) => this.onChangeEmail(event)} value={this.state.email} />
                    <input type="password" id="password" className="form-control mb-4" placeholder="Password" onChange={(event) => this.onChangePassword(event)} value={this.state.password} />
                    <button className="btn btn-primary btn-block my-4" type="submit" onClick={(event) => this.onSubmitForm(event)}>Sign in</button>
                    <hr />
                    <p>Not a member? <Link to="/users/signup">Register</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Signin)