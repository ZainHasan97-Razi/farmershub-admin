import axios from "./axiosInstance";

export async function getRequest(URL, params, onDownload) {
  return axios.get(`${URL}`, {
    params: params,
  });
}

export async function postRequest(URL, payload) {
  return axios.post(`${URL}`, payload);
}

export async function putRequest(URL, payload) {
  return axios.put(`${URL}`, payload);
}

export async function deleteRequest(URL) {
  return axios.delete(`${URL}`);
}
