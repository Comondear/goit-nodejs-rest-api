const validateBody = require("../middlewapes/validateBody");
const authenticate = require("./authenticate");
const isValidId = require("./isValidId");
const upload = require("./upload");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
  upload,
};
