import axios from 'axios';


const API_KEY = "39616729-48f7c3a0adac5813f5f0e61de";

axios.defaults.baseURL = "https://pixabay.com/api";


export const fetchPhotos = async (query, page) => {
    const response = await axios.get(`/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
};