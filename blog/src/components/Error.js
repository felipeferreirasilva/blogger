import React from 'react'

const Error = props => {
    return (
        <div>
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> {props.error}.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    )
}

export default Error