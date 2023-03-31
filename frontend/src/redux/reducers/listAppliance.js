import { ACTION_STRING } from "../actions/actionString";
// import { applianceTypeLimit } from '../../modules/utils/appliances'
import { ActionType } from "redux-promise-middleware";

const initialState = {
  applianceData: {},
  listPopularAppliance: {},
  listKitchenHome: {},
  listElectronicHome: {},
  listYardHome: {},
  isPending: false,
  isFulfilled: false,
  isReject: false,
  errData: {},
};

const listAppliance = (state = initialState, action) => {
  const { listAppliance, listPopularAppliance, listKitchen, listElectronic, listYard } =
    ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;

  switch (action.type) {
    // list appliance for search, filter, and other
    case listAppliance.concat("_", Pending):
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isReject: false,
      };

    case listAppliance.concat("_", Fulfilled):
      const applianceData = action.payload.data.result;
      return {
        ...state,
        applianceData,
        isPending: false,
        isFulfilled: true,
      };

    case listAppliance.concat("_", Rejected):
      const errData = action.payload.response.data;
      return {
        ...state,
        isPending: false,
        isReject: true,
        errData,
      };

    // list popular appliance
    case listPopularAppliance.concat("_", Pending):
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isReject: false,
      };
    case listPopularAppliance.concat("_", Fulfilled):
      return {
        ...state,
        listPopularAppliance: action.payload.data.result.data,
        isPending: false,
        isFulfilled: true,
      };
    case listPopularAppliance.concat("_", Rejected):
      return {
        ...state,
        isPending: false,
        isReject: true,
        errData: action.payload.response.data,
      };
    // list Kitchen for Home
    case listKitchen.concat("_", Pending):
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isReject: false,
      };
    case listKitchen.concat("_", Fulfilled):
      return {
        ...state,
        listKitchenHome: action.payload.data.result.data,
        isPending: false,
        isFulfilled: true,
      };
    case listKitchen.concat("_", Rejected):
      return {
        ...state,
        isPending: false,
        isReject: true,
        errData: action.payload.response.data,
      };
    // list ElectronicHome
    case listElectronic.concat("_", Pending):
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isReject: false,
      };
    case listElectronic.concat("_", Fulfilled):
      console.log("ini action", action);
      return {
        ...state,
        listElectronicHome: action.payload.data.result.data,
        isPending: false,
        isFulfilled: true,
      };
    case listElectronic.concat("_", Rejected):
      return {
        ...state,
        isPending: false,
        isReject: true,
        errData: action.payload.response.data,
      };

    // listYardHome
    case listYard.concat("_", Pending):
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isReject: false,
      };
    case listYard.concat("_", Fulfilled):
      return {
        ...state,
        listYardHome: action.payload.data.result.data,
        isPending: false,
        isFulfilled: true,
      };
    case listYard.concat("_", Rejected):
      return {
        ...state,
        isPending: false,
        isReject: true,
        errData: action.payload.response.data,
      };

    default:
      return state;
  }
};

export default listAppliance;
