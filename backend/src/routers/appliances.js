const express = require("express");
const applianceRouter = express.Router();
const applianceController = require("../controllers/appliances");
const authorize = require("../middlewares/authorize");
const upload = require("../controllers/upload");

applianceRouter.post(
  "/",
  authorize.checkToken,
  authorize.checkRenter,
  upload.uploadHandlerappliances,
  applianceController.addNewappliance
);
applianceRouter.get("/", applianceController.listappliance);
applianceRouter.get(
  "/renter",
  authorize.checkToken,
  authorize.checkRenter,
  applianceController.listapplianceByRenterId
);
applianceRouter.get("/:id", applianceController.applianceDetail);
applianceRouter.delete(
  "/",
  authorize.checkToken,
  authorize.checkRenter,
  applianceController.delapplianceById
);
applianceRouter.patch(
  "/:id",
  authorize.checkToken,
  authorize.checkRenter,
  upload.uploadHandlerappliances,
  applianceController.updateappliances
);

module.exports = applianceRouter;
