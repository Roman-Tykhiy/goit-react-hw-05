import axios from 'axios';
const API_READ_ACCESS_TOKEN = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MDgzMGY3ZjhlZGZkYzRjZWY0NmFhYjNiYjhhNmQyYSIsIm5iZiI6MTczOTE5NjIxOC4yMDMsInN1YiI6IjY3YWEwNzNhYjQxMjlhNDFiMDA2MTU1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cJ_SiSnZHeLwMEckhTrzcfaPK1qXxPjmFUJe04GEX4U`;

const BASE_URL = 'https://api.themoviedb.org/3/';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/';
const sizes = {
    poster: {
        xs: "w92",
        s: "w154",
        m: "w185",
        l: "w342",
        xl: "w500",
        xxl: "w780",
        raw: "original",
    },
    backdrop: {
        s: "w300",
        m: "w780",
        l: "w1280",
        raw: "original",
    },
    profile: {
        s: "w45",
        m: "w185",
        l: "h632",
        raw: "original"
    }
}

export const getImgUrl = (imgName, type = 'poster' /* poster || backdrop | profile */, size = 'raw') => {
    // console.log('imgUrl = '+ IMG_BASE_URL + sizes[type][size] + imgName);
    if (!sizes[type] || !sizes[type][size]) throw new Error('Incorrect image type or size.');
    return IMG_BASE_URL + sizes[type][size] + imgName;
}

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${API_READ_ACCESS_TOKEN}`;
axios.defaults.headers.common['accept'] = 'application/json';

export const getTrendingMovies = async (timeWindow = 'day', page = 1) => {
    return axios.get(`trending/movie/${timeWindow}?language=en-US&page=${page}`);
}

export const getMovieDetails = async (id) => {
    return axios.get(`movie/${id}?language=en-US`);
}

export const getMovieReviews = async (id, page = 1) => {
    return axios.get(`movie/${id}/reviews?language=en-US&page=${page}`);
}

export const getMovieCredits = async (id) => {
    return axios.get(`movie/${id}/credits?language=en-US`);
}

export const searchMovies = async (query, page = 1) => {
    return axios.get(`search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`);
}
