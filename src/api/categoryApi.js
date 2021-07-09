import axiosClient from "./axiosClient";

const categoryAPI = {
  getAll(params) {
    const url = '/categories';
    return axiosClient.get(url, { params })
  },

  get(id) {
    const url = `/categories/${id}`;
    return axiosClient.get(url)
  },

  add(data) {
    const url = `/categories/${id}`;
    return axiosClient.post(url)
  },

  update(data) {
    const url = `/categories/${data.id}`
    return axiosClient.patch(url, data)
  },

  remove(id) {
    const url = `/categories/${id}`;
    return axiosClient.delete(url)
  }
};c

export default categoryAPI;