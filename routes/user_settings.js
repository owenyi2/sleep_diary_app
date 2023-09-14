const express = require("express");
const router = express.Router();

const user_settings_controller = require("../controllers/user_settings_controller")

router.get("/", user_settings_controller.settings);

router.post("/update", user_settings_controller.update);

router.get("/save_confirmed", user_settings_controller.confirm);

module.exports = router;