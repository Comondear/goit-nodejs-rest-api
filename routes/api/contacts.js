const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId, authenticate } = require("../../middlewapes");

const { schemas } = require("../../models/contact");

const router = express.Router();

router.get("/", authenticate, ctrl.getAll);

router.get("/:id", isValidId, authenticate, ctrl.getById);

router.post(
  "/",
  validateBody(schemas.addSchema),
  authenticate,
  ctrl.postContact
);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  authenticate,
  ctrl.putContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  authenticate,
  ctrl.patchFavorite
);

router.delete("/:id", isValidId, authenticate, ctrl.deleteById);

module.exports = router;
