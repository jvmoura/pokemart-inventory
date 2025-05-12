const express = require("express");
const router = express.Router();
const {getCharacters, postCharacter, deleteCharacter} = require("../controllers/characters.controller");

router.get('/', getCharacters);
router.post('/', postCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;