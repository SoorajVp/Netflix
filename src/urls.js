import { API_KEY } from "./Constants/Constant";

export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const actions = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const trendings = `/trending/all/week?api_key=${API_KEY}&language=en-US`;
export const romanctics = `/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const horrors = `/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const comedies = `/discover/movie?api_key=${API_KEY}&with_genres=35`;




