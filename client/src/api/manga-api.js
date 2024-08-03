import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data';

export const getAllManga = (directory) =>  request.get(`${BASE_URL}/${directory}`);

export const getMangaById = (directory, mangaId) => request.get(`${BASE_URL}/${directory}/${mangaId}`);

const createManga = (directory, data, accessToken) => request.post(`${BASE_URL}/${directory}`, data, accessToken);


const mangaAPI = {
    getAllManga,
    getMangaById,
    createManga
}

export default mangaAPI 