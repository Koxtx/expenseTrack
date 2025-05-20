const rateLimit = require("express-rate-limit");

const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json({
      status: options.statusCode,
      message: "trop de requêtes !",
    });
  },
});

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json({
      status: options.statusCode,
      message: "trop de tentative de connexion. réessayer plus tard",
    });
  },
});

module.exports = { generalLimiter, loginLimiter };
