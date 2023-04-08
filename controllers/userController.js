const userModel = require('../models/userModel')
const bcrypt=require('bcrypt')

exports.registerController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).send({
                message:"fill all details"
            })
        }
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            return res.status(401).send({
                message:"User Already Exists"
            })
        }
        const hashedpassword=await bcrypt.hash(password,10)
        const user = new userModel({ username, email, password:hashedpassword })
        await user.save();
        return res.status(201).send({
            message:"new user created",user
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"error in register callback"
        })
    }
 };

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find({})
        return res.status(200).send({
            userCount: users.length,
            message: "all user data",
            users
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"error in register callback"
        })
    }
 };

exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(402).send({
                message: "please provide email ans password",
                success:false
            })
        }
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(200).send({
                success:false,
                message:"email is not registered"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).send({
                success:false,
                message:"invalid username or password"
            })
        }
        return res.status(200).send({
            success: true,
            message:"login successfully"
        })
    }
    catch(error) {
        console.log(error)
        return res.status(500).send({
            message:"error in login callback"
        })
    }
 };

