const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypts");

const createToken = require("../token/tokenCoin"),createToken;
const Users = require("../models/user-model");

//Still need to figure out rest router

//need to generate password, user and ERRORS AS WELL AS LOGIN

// router.post("api/register", (req, res) => {
//     const user = req.body;

//     if(!user.username || !user.password) {
//         res.status(400).json({errorMessage: "Please provide correct login info."});
//     } else {

//     }
// } )