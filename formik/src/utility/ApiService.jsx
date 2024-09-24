import axios from "axios";

const API_URL = 'https://66dcb06447d749b72acc3f54.mockapi.io';

const AxiosService = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json"
    }
})


export default AxiosService