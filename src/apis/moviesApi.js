import axiosClient from './axiosClient';

const moviesApi = {
    getAll: (params) => {
        const url = "/movies";
        return axiosClient.get(url, { params })
    },

    getSearchMovie: (name) => {
        const url = `/movies?q=${name}`;
        return axiosClient.get(url)
    }
}

export default moviesApi;