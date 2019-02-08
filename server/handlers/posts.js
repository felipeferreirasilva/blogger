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
    try{
        let post = await db.Post.findById(req.params.post_id)
        return res.status(200).json(post)
    }catch(err){
        return next(err)
    }
}

// Get all posts and sort by updated date
exports.getAllPosts = async function(req, res, next){
    try{
        let posts = await db.Post.find().sort({updatedAt: -1})
        return res.status(200).json(posts)
    }catch(err){
        return next(err)
    }
}

exports.deletePost = async function(req, res, next){
    try{
        let foundPost = await db.Post.findById(req.params.post_id)
        await foundPost.remove()
        return res.status(200).json(foundPost)
    }catch(err){
        return next(err)
    }
}

exports.updatePost = async function(req, res, next){
    try{
        let postId = req.params.post_id
        let newPost = {
            title: req.body.title,
            text: req.body.text
        } 
        let post = await db.Post.findByIdAndUpdate(postId, newPost)
        return res.status(200).json(post)
    }catch(err){
        return next(err)
    }
}