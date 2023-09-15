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
    res.render("entry_form", {title: "Create New Entry", update: false})
}

exports.request_update_entry = asyncHandler(async (req, res, next) => {
    const sleep_entry = await Sleep_Entry.findOne({date: Date.parse(req.params.date)}).exec()

    res.render("entry_form", {title: `Update Sleep Entry for ${sleep_entry.date_formatted}`, sleep_entry: sleep_entry, update: true})
})

exports.update_entry = asyncHandler(async (req, res, next) => {
    const id = await Sleep_Entry.findOne({date: req.body.date}, "_id").exec()

    const sleep_entry = new Sleep_Entry({
        date: req.body.date,
        bedtime: req.body.bedtime.replace(":", ""),
        asleep_by: req.body.asleep_by.replace(":", ""),
        risetime: req.body.risetime.replace(":", ""),
        sleep_routine_followed: "sleep_routine_followed" in req.body,
        comment: req.body.comment,
        _id: id
    })

    await Sleep_Entry.findByIdAndUpdate(id, sleep_entry, {});

    res.redirect(`/sleep_entries/${req.body.date}/detail`)
})

exports.new_entry = asyncHandler(async (req, res, next) => {
    const id = await Sleep_Entry.find({date: req.body.date}).exec()    

    const sleep_entry = new Sleep_Entry({
        date: req.body.date,
        bedtime: req.body.bedtime.replace(":", ""),
        asleep_by: req.body.asleep_by.replace(":", ""),
        risetime: req.body.risetime.replace(":", ""),
        sleep_routine_followed: "sleep_routine_followed" in req.body,
        comment: req.body.comment,
    })

    if (id.length > 0) {

        return res.render("entry_form", {sleep_entry: sleep_entry, collision_error: id[0]})
    } else{
        await sleep_entry.save()

        return res.redirect(`/sleep_entries/${req.body.date}/detail`)
    }
})

exports.request_delete_entry = (req, res, next) => {
    res.render("entry_delete", {date: req.params.date})
}

exports.delete_entry = asyncHandler(async (req, res, next) => {
    await Sleep_Entry.findOneAndDelete({date: req.params.date}).exec();
    res.redirect("/sleep_entries");
})

exports.search = asyncHandler(async (req, res, next) => {  
    const sleep_entries = await Sleep_Entry.find().sort({date: "desc"}).limit(10).exec()

    console.log(new Date().toISOString().substring(0, 10))
    res.render("search", {date: new Date().toISOString().substring(0, 10), sleep_entries: sleep_entries, limit: 10})
})

exports.search_results = asyncHandler(async (req, res, next) => {
    const {search_before, limit} = req.body

    console.log(search_before, limit)
    const sleep_entries = await Sleep_Entry.find({date: {$lte: search_before} }).sort({date: "desc"}).limit(limit).exec()

    res.render("search", {date: search_before, sleep_entries: sleep_entries, limit: limit})
})