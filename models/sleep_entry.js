const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Sleep_Entry_Schema = new Schema({
    date: { type: Date, required: true, unique: true },
    bedtime: {type: String, required: true, minlength: 4, maxlength: 4 },
    asleep_by: {type: String, required: true, minlength: 4, maxlength: 4 },
    risetime: {type: String, required: true, minlength: 4, maxlength: 4 },
    sleep_routine_followed: {type:Boolean, required: true},
    comment: {type:String}
})

module.exports = mongoose.model("sleep_entry", Sleep_Entry_Schema);

