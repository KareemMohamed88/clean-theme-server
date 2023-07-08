const { check } = require("express-validator");
const vaildatorMiddlewareFunction = require("../../middleware/vaildatorMiddleware");


exports.getCreateUserVaildator = [
  check("username")
    .notEmpty()
    .withMessage("username required")
    .isLength({ min: 3 })
    .withMessage("username to short")
    .isLength({ max: 32 })
    .withMessage("username to long"),
  check("email")
    .notEmpty()
    .withMessage("email required")
    .isLength({ min: 5 })
    .withMessage("email short")
    .isLength({ max: 32 })
    .withMessage("email long"),
  check("password")
    .notEmpty()
    .withMessage("password required")
    .isLength({ min: 8 })
    .withMessage("password to short")
    .isLength({ max: 156 })
    .withMessage("password to long"),
  vaildatorMiddlewareFunction,
];
