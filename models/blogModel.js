const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true,"title is required"]
    },
    description:{
        type: String,
        require:[true,"title is required"]
    },
    image: {
        type: String,
        required:[true,"image is requires"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        require:[true,"userid is required"],
    },
}, { timestamps: true })

const blogModel = mongoose.model("blog", blogSchema);

module.exports=blogModel