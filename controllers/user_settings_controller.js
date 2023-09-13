const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

const User_Settings = require("../models/user_settings")

exports.settings = asyncHandler(async (req, res, next) => {
    const user_settings = await User_Settings.findOne().exec()
    
    res.render("settings", {user_settings: user_settings})
})


