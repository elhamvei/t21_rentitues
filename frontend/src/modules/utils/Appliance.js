import axios from "axios";
const urlAppliances = process.env.REACT_APP_HOST + "/appliances";

export const postAppliance = (body, token) => {
  return axios.post(urlAppliances, body, {
    headers: { "x-access-token": token },
  });
};

export const applianceDetail = (id) => {
  const urlApplianceDetail = urlAppliances + `/${id}`;
  return axios.get(urlApplianceDetail);
};

export const applianceEdit = (id, body, token) => {
  const urlApplianceEdit = urlAppliances + `/${id}`;
  return axios.patch(urlApplianceEdit, body, {
    headers: { "x-access-token": token },
  });
};

export const applianceDelete = (id, token) => {
  const urlApplianceDelete = urlAppliances + `?id=${id}`;
  return axios.delete(urlApplianceDelete, {
    headers: { "x-access-token": token },
  });
};

export const applianceTypeLimit = (params) => {
  const urlGetAppliance =
    urlAppliances +
    `?search=${params.search}&type=${params.type}&location=${params.location}&by=${params.by}&order=${params.order}&limit=${params.limit}&page=${params.page}`;
  console.log(urlGetAppliance);
  return axios.get(urlGetAppliance);
};

export const applianceSearchFilter = (urlParams) => {
  const urlApplianceSearchFilter = urlAppliances + `/${urlParams}`;
  return axios.get(urlApplianceSearchFilter);
};

export const applianceSearchFilterByRenterId = (urlParams, token) => {
  const urlApplianceSearchFilterByRenterId = urlAppliances + `/renter${urlParams}`;
  return axios.get(urlApplianceSearchFilterByRenterId, {
    headers: { "x-access-token": token },
  });
};
