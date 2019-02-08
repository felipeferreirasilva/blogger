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
                <div className="jumbotron">
                    {hasError &&
                        <Error error={error} />
                    }
                    <form>
                    <h2 className="h2-responsive font-weight-bold text-center">Register</h2>
                        <div className="md-form">
                            <input type="text" id="name" className="form-control" onChange={(event) => this.onChangeName(event)} value={this.state.name} required />
                            <label htmlFor="name" className="">Name</label>
                        </div>
                        <div className="md-form">
                            <input type="email" id="email" className="form-control" onChange={(event) => this.onChangeEmail(event)} value={this.state.email} required />
                            <label htmlFor="email" className="">Email</label>
                        </div>
                        <div className="md-form">
                            <input type="password" id="password" className="form-control" onChange={(event) => this.onChangePassword(event)} value={this.state.password} required />
                            <label htmlFor="password" className="">Password</label>
                        </div>
                        <button className="btn btn-primary my-4 btn-block waves-effect waves-light" type="submit" onClick={(event) => this.onSubmitForm(event)}>Sign up</button>
                        <p className="text-center">Is already a member? <Link to="/users/signin">Log In</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Signup)