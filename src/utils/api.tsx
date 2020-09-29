import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export default axiosClient;
