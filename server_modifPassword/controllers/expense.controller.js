const Expense = require("../models/expense.schema");
const User = require("../models/user.schema");

const addExpense = async (req, res) => {
  try {
    // on insère la dépense en BDD
    const expense = await Expense.create(req.body);

    // on la retourne à l'application WEB
    res.status(201).json(expense);
  } catch (error) {
    console.log(error);
  }
};

const getExpensesByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const expenses = await Expense.find({ user: id });
    res.status(200).json(expenses);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addExpense, getExpensesByUser };
