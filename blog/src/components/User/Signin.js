import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn, removeError } from '../../store/actions'
import Error from '../Error'

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
        let hasError = Object.keys(this.props.error).length > 0 ? true : false
        let error = this.props.error

        this.props.history.listen(() => {
            this.props.dispatch(removeError())
        })

        return (
            <div className="container">
                {hasError &&
                    <Error error={error} />
                }
                <form className="text-center border border-light p-5">
                    <p className="h1-responsive mb-4">Sign in</p>
                    <input type="email" id="email" className="form-control mb-4" placeholder="E-mail" onChange={(event) => this.onChangeEmail(event)} value={this.state.email} required />
                    <input type="password" id="password" className="form-control mb-4" placeholder="Password" onChange={(event) => this.onChangePassword(event)} value={this.state.password} required />
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