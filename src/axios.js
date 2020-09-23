import axios from 'axios';

//to append the api after the base url
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3", 
});

//why default always? 
export default instance;