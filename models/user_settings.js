const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User_Settings_Schema = new Schema({
    desired_bedtime: {type: String, required: true, minlength: 4, maxlength: 4 },
    desired_asleep_by: {type: String, required: true, minlength: 4, maxlength: 4 },
    desired_risetime: {type: String, required: true, minlength: 4, maxlength: 4 },
    sleep_routine: {type:Boolean, required: true},
})

module.exports = mongoose.model("user_settings", User_Settings_Schema);
