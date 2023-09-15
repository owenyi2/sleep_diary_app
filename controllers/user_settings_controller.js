const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

const User_Settings = require("../models/user_settings")

exports.settings = asyncHandler(async (req, res, next) => {
    const user_settings = await User_Settings.findOne().exec()
    
    res.render("settings", {user_settings: user_settings})
})

exports.update = asyncHandler(async (req, res, next) => {
    const id = await User_Settings.findOne({}, "_id").exec()

    const settings = new User_Settings({
        desired_bedtime: req.body.desired_bedtime.replace(":", ""),
        desired_asleep_by: req.body.desired_asleep_by.replace(":", ""),
        desired_risetime: req.body.desired_risetime.replace(":", ""),
        sleep_routine: "sleep_routine" in req.body,
        _id: id
    })
    await User_Settings.findByIdAndUpdate(id, settings, {});

    res.redirect("/settings/save_confirmed")
})

exports.confirm = (req, res, next) => {
    res.render("save_settings_confirmed")
}


