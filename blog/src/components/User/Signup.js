import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component {
    render() {
        return (
            <div className="container">
                <form className="text-center border border-light p-5">
                    <p className="h4 mb-4">Sign up</p>
                    <div className="form-row mb-4">
                        <div className="col">
                            <input type="text" id="defaultRegisterFormFirstName" className="form-control" placeholder="Name" />
                        </div>
                    </div>
                    <input type="email" id="defaultRegisterFormEmail" className="form-control mb-4" placeholder="E-mail" />
                    <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" />
                    <button className="btn btn-primary my-4 btn-block" type="submit">Sign up</button>
                    <hr/>
                    <p>Is already a member? <Link to="/users/signin">Log In</Link></p>
                </form>
            </div>
        )
    }
}

export default Signup