const express = require("express");
// const { start } = require("repl");

const ctrl = require("../../controllers/auth");

const { validateBody } = require("../../middlewapes");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

module.exports = router;
