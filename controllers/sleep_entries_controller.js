const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

const Sleep_Entry = require("../models/sleep_entry")

exports.index = asyncHandler(async (req, res, next) => {
    const sleep_entries = await Sleep_Entry.find().sort({date: "desc"}).limit(10).exec()
    res.render("index", {title: "Sleep Entries", sleep_entries: sleep_entries})
})

exports.entry_detail = (req, res, next) => {
    res.send("NOT IMPLEMENTED: Entry Detail");
}