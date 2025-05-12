const express = require("express");
const router = express.Router();
const {getRaces, postRace, deleteRace} = require("../controllers/races.controller");

router.get('/', getRaces);
router.post('/', postRace);
router.delete("/:id", deleteRace);

module.exports = router;