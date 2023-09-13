const express = require("express");
const router = express.Router();

const user_settings_controller = require("../controllers/user_settings_controller")

router.get("/", user_settings_controller.settings)

module.exports = router;