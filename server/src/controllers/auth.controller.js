const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req, res){
    const {email, password} = req.body;

    const isUserAlreadyExists = await userModel.findOne({
        email
    });
    
    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        email,
        password: hash
    });

    const token = await jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfuly",
        user
    });
}

module.exports = {
    registerUser,
}