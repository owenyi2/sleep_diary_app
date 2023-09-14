const express = require("express");
const router = express.Router();

const sleep_entries_controller = require("../controllers/sleep_entries_controller");

router.get("/", sleep_entries_controller.index);

router.get("/new", sleep_entries_controller.new_entry_form);

router.get("/:date/", sleep_entries_controller.entry_detail);

router.get("/:date/update", sleep_entries_controller.request_update_entry);

router.get("/:date/delete", sleep_entries_controller.request_delete_entry);

router.post("/:date/update", sleep_entries_controller.update_entry);

router.post("/:date/delete", sleep_entries_controller.delete_entry);

module.exports = router;