import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../store/actions'

class Logout extends Component {
    componentDidMount() {
        this.props.dispatch(logout())
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                Logging out...
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps)(Logout)