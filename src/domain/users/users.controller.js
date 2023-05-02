const express = require("express");

const userService = require("./users.service");

const router = express.Router();

router.get("/", userService.findAll);
router.get("/:userId", userService.findOne);
router.post("/", userService.createUser);
router.put("/:userId", userService.updateUser);
router.delete("/:userId", userService.deleteUser);

module.exports = router;
