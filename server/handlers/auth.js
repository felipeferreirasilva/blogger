const db = require('../models')
const jwt = require('jsonwebtoken')

exports.signin = () => {

}

exports.signup = async (req, res, next) => {
    try {
        let user = await db.User.create(req.body)
        let { id, name, email } = user
        let token = jwt.sign({
            id,
            name,
            email
        },
            process.env.SECRET_KEY)
        return res.status(200).json({
            id,
            name,
            email,
            token
        })
    } catch (err) {
        if (err.code === 11000) {
            err.message = 'Sorry, that username/email is already taken'
        }

        return next({
            status: 400,
            message: err.message
        })
    }
}