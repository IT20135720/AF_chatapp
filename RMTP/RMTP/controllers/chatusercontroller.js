const asyncHandler = require("express-async-handler");
const ChatUser = require('../models/usermodel')
const generateToken = require("../config/generateToken")


const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please Enter all the Fields")
    }

    //checks whether user exists or not from email
    const userExists = await ChatUser.findOne({ email })
    if (userExists) {
        throw new Error("User already exists");
    }

    const user = await ChatUser.create({
        name,
        email,
        password,

    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});


const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await ChatUser.findOne({ email });

    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("Invalid Email or Password");
    }
});

const allUser = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await ChatUser.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
});




module.exports = { registerUser, authUser, allUser }