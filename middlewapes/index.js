const validateBody = require("../middlewapes/validateBody");
const authenticate = require("./authenticate");
const isValidId = require("./isValidId");

module.exports = {
  validateBody,
  isValidId,
  authenticate,
};
