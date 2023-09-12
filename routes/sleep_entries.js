const express = require("express");
const router = express.Router();

const sleep_entries_controller = require("../controllers/sleep_entries_controller");

router.get("/", sleep_entries_controller.index);

router.get("/:date/", sleep_entries_controller.entry_detail);

module.exports = router;