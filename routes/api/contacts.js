const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewapes");

const schemas = require("../../schemas/Schemas");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.postContact);

router.put("/:id", validateBody(schemas.addSchema), ctrl.putContact);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
