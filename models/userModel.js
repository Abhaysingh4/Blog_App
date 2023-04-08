const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true,'username is required']
    },
    email: {
        type: String,
        required:[true,'username is required']
    },
    password: {
        type: String,
        required:[true,'username is required']
    }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema);
module.exports=userModel
