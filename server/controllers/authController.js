const User = require("../models/user.js");
const { hashPassword, comparePassword } = require("../helpers/auth.js");
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
};
//Register Endpoint
const registerUser = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        //Check if name was entered
        if(!name){
            return res
            .status(400)
            .json({error: 'Please enter your name'})
        }
        //Check if password is good
        if(!password || password.length < 6){
            return res
            .status(400)
            .json({error: 'Please enter a password and it should be atleast 6 characters'})
        }
        //Check if email was entered
        const exist = await User.findOne({email});
        if(exist){
            return res
            .status(400)
            .json({error: 'Email already exists'})
        }
        const hashedPassword = await hashPassword(password)
        //Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        return res
        .status(201)
        .json({message: 'User created', user})

    } catch (error) {
        console.log(error);
    }
}
//Login Endpoint
const loginUser = async(req,res) => {
    try {
        const {email, password} = req.body;
        //Check if user exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'No user found'
            })
        }

        // Check if passwords match
        const match = await comparePassword(password,user.password)
        if(match){
            jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET , {}, (err, token) => {
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        }
        if(!match){
            res.json({
                error: "Passwords do not match"
            })
        }
    } catch (error) {
        console.log(error);
    }
}
const getProfile = (req,res) => {
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
            if(err) throw err;
            res.json(user)
        })
    }
    else{
        res.json(null);
    }
}
module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}