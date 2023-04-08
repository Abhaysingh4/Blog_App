const blogModel = require('../models/blogModel');

exports.getAllBlogController = async(req, res) => {
    try {
        const blogs = await blogModel.find({});
        if (!blogs) {
            return res.status(200).send({
                success: false,
                message:"no blog found"
            })
        }
        return res.status(200).send({
            success: true,
            blogCount: blogs.length,
            message: "All Blog Lists",
            blogs
        })
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"error in getting blogs"
        })
    }
}
exports.createBlogController = async(req, res) => {
    try {
        const { title, description, image } = req.body;
        if (!title || !description || !image) {
            return res.status(404).send({
                success: false,
                message: "provide all fields",
            });
        }
        const newBlog = new blogModel({ title, description, image });
        await newBlog.save();
        return res.status(201).send({
            success: true,
            message: "blog created",
            newBlog,
        });

    } catch (error) {
        console.log(error)
        return res.status(400).send({
            success:false,
            message:"error in creating blogs"
        })
    }
}
exports.updateBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        // const { title, description, image } = req.body; 
        const blog = await blogModel.findByIdAndUpdate(id, { ...req.body }, { new: true })
        return res.status(200).send({
            success: true,
            message: "blog updated",
        });

    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message: "error in updating blogs",
        });
    }
}
exports.deleteBlogController =async (req, res) => {
    try {
        await blogModel.findOneAndDelete(req.params.id);
        return res.status(200).send({
            success: true,
            message: "blog deleted",
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            success: false,
            message:"error in deleting blogs"
        })
    }
}
exports.getBlogController = async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await blogModel.findById(id)
        if (!blog) {
            return res.status(500).send({
                success: false,
                message:"blog not found"
            })
        }
        return res.status(200).send({
            success: true,
            message: "fetch single blog",
            blog
        });
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"error in getting blog"
        })
    }
}