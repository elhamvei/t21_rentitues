import { ACTION_STRING } from "./actionString";
import {
  applianceTypeLimit,
  applianceSearchFilter,
} from "../../modules/utils/Appliance";

const { listAppliance, listPopularAppliance, listKitchen, listElectronic, listYard } =
  ACTION_STRING;

export const listAppliancePopularAction = (params) => {
  return {
    type: listPopularAppliance,
    payload: applianceTypeLimit(params),
  };
};

export const listVechileAction = (params) => {
  return {
    type: listAppliance,
    payload: applianceSearchFilter(params),
  };
};

export const listApplianceKitchenAction = (params) => {
  return {
    type: listKitchen,
    payload: applianceTypeLimit(params),
  };
};
export const listApplianceElectronicAction = (params) => {
  return {
    type: listElectronic,
    payload: applianceTypeLimit(params),
  };
};

export const listApplianceYardAction = (params) => {
  return {
    type: listYard,
    payload: applianceTypeLimit(params),
  };
};
