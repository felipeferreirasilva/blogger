const mongoose = require('mongoose')
const User = require('./user')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
   timestamps: true 
})

postSchema.pre('remove', async function(next){
    try{
        let user = await User.findById(this.user)
        user.message.remove(this.id)
        await user.save()
        return next()
    }catch(err){
        return next(err)
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post