import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp, removeError } from '../../store/actions'
import Error from '../Error'

class Signup extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    onChangeName = event => {
        this.setState({
            name: event.target.value
        })
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
        let newUser = { name: this.state.name, email: this.state.email, password: this.state.password }
        let history = this.props.history
        this.props.dispatch(signUp(newUser, history))
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
                    <p className="h1-responsive mb-4">Sign up</p>
                    <input type="text" id="name" className="form-control mb-4" placeholder="Name" onChange={(event) => this.onChangeName(event)} value={this.state.name} required />
                    <input type="email" id="email" className="form-control mb-4" placeholder="E-mail" onChange={(event) => this.onChangeEmail(event)} value={this.state.email} required />
                    <input type="password" id="password" className="form-control" placeholder="Password" onChange={(event) => this.onChangePassword(event)} value={this.state.password} required />
                    <button className="btn btn-primary my-4 btn-block" type="submit" onClick={(event) => this.onSubmitForm(event)}>Sign up</button>
                    <hr />
                    <p>Is already a member? <Link to="/users/signin">Log In</Link></p>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Signup)