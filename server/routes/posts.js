const express = require('express')
const router = express.Router({mergeParams: true})

const { createPost, getPost, getAllPosts, deletePost, updatePost } = require('../handlers/posts')

router
    .route('/')
    .get(getAllPosts)
    .post(createPost)

router
    .route('/:post_id')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost)


module.exports = router