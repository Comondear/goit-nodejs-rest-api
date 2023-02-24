const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewapes");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.postContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.putContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.patchFavorite
);

router.delete("/:id", isValidId, ctrl.deleteById);

module.exports = router;
