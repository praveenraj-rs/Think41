const express = require("express");
const { GetSwitchStates } = require("../controllers/handleSwitch");
const router = express.Router();

router.get("/", GetSwitchStates);

module.exports = router;
