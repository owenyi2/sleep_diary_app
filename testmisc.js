require('dotenv').config()
const mongoose = require("mongoose")

const User_Settings = require("./models/user_settings")
const Sleep_Entry = require("./models/sleep_entry")

const mongoDB = process.env.mongoDB

main().catch((err)=>console.log(err));
async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB)
    console.log("Debug: Should be connected?");
    console.log("Debug: Populating Database")
    await createUserSettings();
    await createSleepEntries();
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
}

async function createUserSettings() {
    await User_Settings.create({desired_bedtime: "2130", desired_asleep_by: "2200", desired_risetime: "0700", sleep_routine: true})
}

async function createSleepEntries() {
    await Sleep_Entry.insertMany([
        {date: "2023-09-13", bedtime: "2200", asleep_by: "2230", risetime: "0710", sleep_routine_followed: false, comment: ""},
        {date: "2023-09-12", bedtime: "2300", asleep_by: "2212", risetime: "0650", sleep_routine_followed: false, comment: "procrastination"},
        {date: "2023-09-11", bedtime: "2210", asleep_by: "2230", risetime: "0700", sleep_routine_followed: false, comment: "test comment"},
        {date: "2023-09-10", bedtime: "2201", asleep_by: "2213", risetime: "0810", sleep_routine_followed: true, comment: ""},
        {date: "2023-09-09", bedtime: "2200", asleep_by: "2230", risetime: "0710", sleep_routine_followed: false, comment: "comment"},
        {date: "2023-09-08", bedtime: "2300", asleep_by: "2211", risetime: "0651", sleep_routine_followed: false, comment: "comment"},
        {date: "2023-09-07", bedtime: "2211", asleep_by: "2233", risetime: "0704", sleep_routine_followed: false, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies, leo at pretium facilisis, risus enim tempor odio, in tincidunt dui felis eu est. Donec vestibulum nisi lectus, eu fringilla enim pellentesque a. Pellentesque pulvinar orci ac eros egestas ultricies. Proin et enim vel eros mattis ultricies. Ut sed bibendum ligula. Duis sagittis dolor viverra purus malesuada, in malesuada sapien sagittis. Etiam bibendum turpis quis lorem convallis fringilla. Sed a accumsan est, sed lacinia augue. Fusce id sem consequat, bibendum dolor sit amet, placerat libero. In vitae tincidunt velit. Maecenas quis leo sem. Aenean ac magna sit amet nunc condimentum lobortis vitae a lorem. Nam mattis varius molestie"},
        {date: "2023-09-06", bedtime: "2207", asleep_by: "2216", risetime: "0813", sleep_routine_followed: true, comment: ""},
        {date: "2023-09-05", bedtime: "2202", asleep_by: "2237", risetime: "0712", sleep_routine_followed: false, comment: ""},
        {date: "2023-09-04", bedtime: "2303", asleep_by: "2212", risetime: "0658", sleep_routine_followed: true, comment: "procrastination"},
        {date: "2023-09-03", bedtime: "2215", asleep_by: "2231", risetime: "0709", sleep_routine_followed: false, comment: "it is a fact universally acknowledged"},
        {date: "2023-09-02", bedtime: "2202", asleep_by: "2212", risetime: "0811", sleep_routine_followed: true, comment: ""},
        {date: "2023-09-01", bedtime: "2200", asleep_by: "2230", risetime: "0710", sleep_routine_followed: false, comment: ""},
        {date: "2023-08-31", bedtime: "2300", asleep_by: "2212", risetime: "0650", sleep_routine_followed: false, comment: "procrastination"},
        {date: "2023-08-30", bedtime: "2210", asleep_by: "2230", risetime: "0700", sleep_routine_followed: false, comment: "test comment"},
        {date: "2023-08-20", bedtime: "2201", asleep_by: "2213", risetime: "0810", sleep_routine_followed: true, comment: ""},
        {date: "2023-08-19", bedtime: "2200", asleep_by: "2230", risetime: "0710", sleep_routine_followed: false, comment: "comment"},
        {date: "2023-08-16", bedtime: "2300", asleep_by: "2211", risetime: "0651", sleep_routine_followed: false, comment: "comment"},
        {date: "2023-08-14", bedtime: "2211", asleep_by: "2233", risetime: "0704", sleep_routine_followed: false, comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies, leo at pretium facilisis, risus enim tempor odio, in tincidunt dui felis eu est. Donec vestibulum nisi lectus, eu fringilla enim pellentesque a. Pellentesque pulvinar orci ac eros egestas ultricies. Proin et enim vel eros mattis ultricies. Ut sed bibendum ligula. Duis sagittis dolor viverra purus malesuada, in malesuada sapien sagittis. Etiam bibendum turpis quis lorem convallis fringilla. Sed a accumsan est, sed lacinia augue. Fusce id sem consequat, bibendum dolor sit amet, placerat libero. In vitae tincidunt velit. Maecenas quis leo sem. Aenean ac magna sit amet nunc condimentum lobortis vitae a lorem. Nam mattis varius molestie"},
        {date: "2023-08-13", bedtime: "2207", asleep_by: "2216", risetime: "0813", sleep_routine_followed: true, comment: ""},
        {date: "2023-08-12", bedtime: "2202", asleep_by: "2237", risetime: "0712", sleep_routine_followed: false, comment: ""},
        {date: "2023-08-11", bedtime: "2303", asleep_by: "2212", risetime: "0658", sleep_routine_followed: true, comment: "procrastination"},
        {date: "2023-08-10", bedtime: "2215", asleep_by: "2231", risetime: "0709", sleep_routine_followed: false, comment: "it is a fact universally acknowledged"},
        {date: "2023-08-09", bedtime: "2202", asleep_by: "2212", risetime: "0811", sleep_routine_followed: true, comment: ""},
    ])
}