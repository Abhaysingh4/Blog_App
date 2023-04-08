const express = require('express');
const {
    getAllBlogController,
    createBlogController,
    updateBlogController,
    deleteBlogController,
    getBlogController
} = require('../controllers/blogController');
const router = express.Router()

router.get('/all_blog', getAllBlogController);

router.post('/create_blog', createBlogController);

router.put('/update_blog/:id', updateBlogController);

router.get('/get_blog/:id', getBlogController);

router.delete('/delete_blog/:id', deleteBlogController);


module.exports=router
