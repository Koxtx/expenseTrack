const {
  signup,
  signin,
  updateUser,
  updateAvatar,
  currentUser,
  logoutUser,
  verifyMail,
  forgotMyPassword,
  resetPassword,
  changePassword,
} = require("../controllers/user.controller");
const authentification = require("../middlewares/authMiddleware");
const { loginLimiter } = require("../middlewares/rateLimiteMiddleware");

const router = require("express").Router();

// POST

router.post("/", signup);
router.post("/login",loginLimiter, signin);
router.post("/forgotPassword", forgotMyPassword);
router.post("/resetPassword", resetPassword);
router.post("/changePassword", authentification, changePassword);

// UPDATE

router.put("/", authentification, updateUser);
router.put("/avatar", authentification, updateAvatar);

// GET

router.get("/currentUser", authentification, currentUser);
router.get("/verifyMail/:token", verifyMail);

// DELETE

router.delete("/deleteToken", authentification, logoutUser);

module.exports = router;

// localhost:3000/user
