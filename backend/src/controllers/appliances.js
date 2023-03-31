const applianceModel = require("../models/appliances");
const responseHelper = require("../helpers/sendResponse");

const addNewappliance = (req, res) => {
  let { body, userInfo, files } = req;
  const { id } = userInfo;
  applianceModel
    .addNewapplianceModel(body, files, id)
    .then(({ status, result }) => {
      responseHelper.success(res, status, result);
    })
    .catch((status, err) => {
      responseHelper.error(res, status, err);
    });
};

const listappliance = (req, res) => {
  const { query } = req;
  applianceModel
    .listapplianceModels(query)
    .then(({ status, result }) => {
      responseHelper.success(res, status, result);
    })
    .catch(({ status, err }) => {
      responseHelper.error(res, status, err);
    });
};

const listapplianceByRenterId = (req, res) => {
  const { userInfo, query } = req;
  const idRenter = userInfo.id;
  applianceModel
    .listapplianceByRenterIdModel(idRenter, query)
    .then(({ status, result }) => {
      responseHelper.success(res, status, result);
    })
    .catch(({ status, err }) => {
      responseHelper.error(res, status, err);
    });
};

const applianceDetail = (req, res) => {
  const { id } = req.params;
  applianceModel
    .applianceDetailModel(id)
    .then(({ status, result }) => {
      responseHelper.success(res, status, result);
    })
    .catch(({ status, err }) => {
      responseHelper.error(res, status, err);
    });
};

const updateappliances = (req, res) => {
  let { body, userInfo, files, params } = req;
  const { id } = userInfo;
  applianceModel
    .updateappliances(body, id, files, params)
    .then(({ status, result }) => {
      responseHelper.success(res, status, result);
    })
    .catch(({ status, err }) => {
      responseHelper.success(res, status, err);
    });
};

const delapplianceById = (req, res) => {
  const { query, userInfo } = req;
  const { id } = userInfo;
  const idappliance = query.id;

  applianceModel
    .delapplianceById(idappliance, id)
    .then(({ status, result }) => {
      responseHelper.success(res, status, result);
    })
    .catch(({ status, err }) => {
      responseHelper.error(res, status, err);
    });
};

module.exports = {
  addNewappliance,
  listappliance,
  listapplianceByRenterId,
  applianceDetail,
  updateappliances,
  delapplianceById,
};
