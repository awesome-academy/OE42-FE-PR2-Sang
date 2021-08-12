import axiosClient from './axiosClient';

const moviesApi = {
    getAll: (params) => {
        const url = "/movies";
        return axiosClient.get(url, { params })
    }
}

export default moviesApi;