const jwt = require("jsonwebtoken");
const User = require("../models/user.schema");

const authentification = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Accés interdit" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = await User.findById(decoded.sub);
  } catch (error) {
    return res.status(401).json({ message: "Accés non autorisé" });
  }
};

module.exports = authentification;
