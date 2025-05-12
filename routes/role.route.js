const express = require("express");
const router = express.Router();
const {getRoles, postRole, deleteRole} = require("../controllers/roles.controller");

router.get('/', getRoles);
router.post('/', postRole);
router.delete("/:id", deleteRole);

module.exports = router;