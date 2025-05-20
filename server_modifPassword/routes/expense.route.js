const {
  addExpense,
  getExpensesByUser,
} = require("../controllers/expense.controller");
const authentification = require("../middlewares/authMiddleware");
const validateMiddleware = require("../middlewares/validateMiddleware");

const router = require("express").Router();

router.post("/", authentification, validateMiddleware, addExpense);

router.get("/:id", getExpensesByUser);

module.exports = router;

// localhot:3000/expenses
