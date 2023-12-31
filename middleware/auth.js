/** Middleware for handling req authorization for routes. */

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");

/** Middleware: Authenticate user. */
function authenticateJWT(req, res, next) {
  try {
    if (req.path === "/auth/login" || req.path === "/auth/register") {
      return next();
    }
    const tokenFromBody = req.body._token;
    
    console.log("Request Body:", req.body);
    console.log("Extracted Token:", tokenFromBody);

    if (!tokenFromBody) {
      return next({ status: 401, message: "Unauthorized - No token provided" });
    }

    const payload = jwt.verify(tokenFromBody, SECRET_KEY);
    req.user = payload; // create a current user
    console.log("YOU HAVE A VALID TOKEN!");
    return next();
  } catch (err) {
    return next({ status: 401, message: "Unauthorized - Invalid token" });
  }
}

/** Middleware: Requires user is authenticated. */

function ensureLoggedIn(req, res, next) {
  if (!req.user) {
    return next({ status: 401, message: "Unauthorized" });
  } else {
    return next();
  }
}

/** Middleware: Requires correct username. */

function ensureCorrectUser(req, res, next) {
  try {
    if (req.user.username === req.params.username) {
      return next();
    } else {
      return next({ status: 401, message: "Unauthorized" });
    }
  } catch (err) {
    // errors would happen here if we made a request and req.user is undefined
    return next({ status: 401, message: "Unauthorized" });
  }
}
// end

module.exports = {
  authenticateJWT,
  ensureLoggedIn,
  ensureCorrectUser
};