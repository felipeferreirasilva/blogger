import React, { Component } from 'react'

class NewUser extends Component {
    render() {
        return (
            <div className="container jumbotron">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Repeat Password</label>
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Repeat password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create User</button>
                </form>
            </div>
        )
    }
}

export default NewUser