const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const User_Settings_Schema = new Schema({
    desired_bedtime: {type: String, required: true, minlength: 4, maxlength: 4 },
    desired_asleep_by: {type: String, required: true, minlength: 4, maxlength: 4 },
    desired_risetime: {type: String, required: true, minlength: 4, maxlength: 4 },
    sleep_routine: {type:Boolean, required: true},
})

User_Settings_Schema.virtual("desired_bedtime_formatted").get(function () { return format_time(this.desired_bedtime) });
User_Settings_Schema.virtual("desired_asleep_by_formatted").get(function () { return format_time(this.desired_asleep_by) });
User_Settings_Schema.virtual("desired_risetime_formatted").get(function () { return format_time(this.desired_risetime) });

function format_time(time_string) {
    let time_string_formatted = ""
    if (time_string){
        time_string_formatted = `${time_string.slice(0, 2)}:${time_string.slice(2,4)}`
    }
    return time_string_formatted
}

module.exports = mongoose.model("user_settings", User_Settings_Schema);
