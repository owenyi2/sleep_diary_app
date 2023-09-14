const asyncHandler = require("express-async-handler");
const {body, validationResult} = require("express-validator");

const Sleep_Entry = require("../models/sleep_entry")

exports.index = asyncHandler(async (req, res, next) => {
    const sleep_entries = await Sleep_Entry.find().sort({date: "desc"}).limit(10).exec()
    res.render("index", {title: "Sleep Entries", sleep_entries: sleep_entries})
})

exports.entry_detail = asyncHandler(async (req, res, next) => {
    const sleep_entry = await Sleep_Entry.findOne({date: Date.parse(req.params.date)}).exec()

    res.render("sleep_entry_detail", {sleep_entry: sleep_entry})
})

exports.new_entry_form = (req, res, next) => {
    res.send("TODO: new entry form");
}

exports.request_update_entry = (req, res, next) => {
    res.send("TODO: request update entry page")
}

exports.request_delete_entry = (req, res, next) => {
    res.send("TODO: request delete entry page")
}

exports.update_entry = (req, res, next) => {
    res.send("TODO: post update entry")
}

exports.delete_entry = (req, res, next) => {
    res.send("TODO: post delete entry")
}