const responseHelprer = require("../helpers/sendResponse");

const register = (req, res, next) => {
  const { body } = req;
  const registerBody = ["phone", "name", "email", "password"];
  const bodyProperty = Object.keys(body);
  const isBodyValid =
    registerBody.filter((property) => !bodyProperty.includes(property))
      .length == 0
      ? true
      : false;
  if (!isBodyValid) return responseHelprer.error(res, 400, "Invalid Body");
  next();
};

const login = (req, res, next) => {
  const { body } = req;
  const loginBody = ["email", "password"];
  const bodyProperty = Object.keys(body);
  const isBodyValid =
    loginBody.filter((property) => !bodyProperty.includes(property)).length == 0
      ? true
      : false;
  if (!isBodyValid) return responseHelprer.error(res, 400, "Invalid Body");
  next();
};

const appliance = (req, res, next) => {
  const { body } = req;
  const editappliance = ["name", "locations", "types_id", "price", "date_time"];
  const bodyProperty = Object.keys(body);
  const isBodyValid =
    editappliance.filter((property) => !bodyProperty.includes(property)).length ==
    0
      ? true
      : false;
  if (!isBodyValid) return responseHelprer.error(res, 400, "Invalid Body");
  next();
};

module.exports = {
  register,
  appliance,
  login,
};
