const db = require('../models')

exports.createPost = async function(req, res, next){
    try{
        let post = await db.Post.create({
            title: req.body.title,
            text: req.body.text,
            user: req.params.id
        })
        let foundUser = await db.User.findById(req.params.id)
        foundUser.posts.push(post.id)
        await foundUser.save()
        let foundPost = await db.Post.findById(post._id).populate('user', {
            name: true,
            email: true
        })
        return res.status(200).json(foundPost)
    }catch(err){
        return next(err)
    }
}

exports.getPost = async function(req, res, next){

}

exports.deletePost = async function(req, res, next){

}