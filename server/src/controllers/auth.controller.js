const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function registerUser(req, res){
    const {username, email, password} = req.body;

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
        username,
        email,
        password: hash
    });

    // const token = await jwt.sign(
    //     { id: user._id }, 
    //     process.env.JWT_SECRET
    // );

    // res.cookie("token", token);

    res.status(201).json({
        message: "User registered successfuly",
        user
    });
}

async function loginUser(req, res) {

    console.log("In login controller data : ", req.body)
    
    const {email, password} = req.body;

    const user = await userModel.findOne({email});

    if(!user){
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid credentials"
        });
    }

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET,
    { expiresIn: "2m" }
    );

    res.cookie("token", token, {
        maxAge: 2 * 60 * 1000,
        httpOnly: true,
    secure: false,
    sameSite: "lax",
     path: "/"
    });

//     res.clearCookie("token", {
//     httpOnly: true,
//     secure: false,
//     sameSite: "lax",
//     path: "/",
// });

// return res.status(200).json({
//     message: "Old token cleared"
// });

    res.status(200).json({
        message: "User logged in successfuly",
        user
    });
}

async function logoutUser(req, res) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
    });

    return res.status(200).json({
        message: "Logged out successfully",
    });
}

async function getCurrentUser(req, res) {
    console.log("This is getCurrentUser controller");

    const userId = req.userId

    const user = await userModel.findById(userId);

    console.log(user);

    res.status(200).json({
        message: "This is Logged In User",
        user
    })
}

module.exports = {
    registerUser,
    loginUser,
    getCurrentUser,
    logoutUser
}