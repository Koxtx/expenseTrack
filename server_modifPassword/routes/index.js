const router = require("express").Router();

const apiUsers = require("./user.route");
const apiExpenses = require("./expense.route");
const apiPassword = require("./password.route");

router.use("/user", apiUsers);
router.use("/expenses", apiExpenses);
router.use("/password", apiPassword);

module.exports = router;

// localhost:3000
