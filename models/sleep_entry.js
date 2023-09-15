const mongoose = require("mongoose");
const {DateTime} = require("luxon");

const Schema = mongoose.Schema;

const Sleep_Entry_Schema = new Schema({
    date: { type: Date, required: true, unique: true },
    bedtime: {type: String, required: true, minlength: 4, maxlength: 4 },
    asleep_by: {type: String, required: true, minlength: 4, maxlength: 4 },
    risetime: {type: String, required: true, minlength: 4, maxlength: 4 },
    sleep_routine_followed: {type:Boolean, required: true},
    comment: {type:String}
})

Sleep_Entry_Schema.virtual("date_formatted").get(function () {
    let date_formatted = ""
    if (this.date) {
        date_formatted = DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
    }
    return date_formatted
})
Sleep_Entry_Schema.virtual("date_ISO8601").get(function() {
    let date_ISO8601 = ""
    if (this.date) {
        date_ISO8601 = DateTime.fromJSDate(this.date).toISODate();
    }
    return date_ISO8601
})

Sleep_Entry_Schema.virtual("bedtime_formatted").get(function () { return format_time(this.bedtime) });
Sleep_Entry_Schema.virtual("asleep_by_formatted").get(function () { return format_time(this.asleep_by) });
Sleep_Entry_Schema.virtual("risetime_formatted").get(function () { return format_time(this.risetime) });

Sleep_Entry_Schema.virtual("url").get(function() { return `/sleep_entries/${DateTime.fromJSDate(this.date).toISODate()}` })

function format_time(time_string) {
    let time_string_formatted = ""
    if (time_string){
        time_string_formatted = `${time_string.slice(0, 2)}:${time_string.slice(2,4)}`
    }
    return time_string_formatted
}

module.exports = mongoose.model("sleep_entry", Sleep_Entry_Schema);

