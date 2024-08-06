import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data';

export const getAllManga = (directory, signal) =>  request.get(`${BASE_URL}/${directory}`, undefined, undefined, undefined, signal);

export const getMangaById = (directory, mangaId, signal) => request.get(`${BASE_URL}/${directory}/${mangaId}`, undefined, undefined, undefined, signal);

const createManga = (directory, data, accessToken) => request.post(`${BASE_URL}/${directory}`, data, accessToken);

const deleteManga = (directory, mangaId, accessToken) => request.del(`${BASE_URL}/${directory}/${mangaId}`, undefined, accessToken);

const editManga = (directory, mangaId, data, accessToken) => request.put(`${BASE_URL}/${directory}/${mangaId}`, data, accessToken);

const buyManga = (directory, mangaId, data, accessToken, adminAccess) => request.put(`${BASE_URL}/${directory}/${mangaId}`, data, accessToken, adminAccess);


const mangaAPI = {
    getAllManga,
    getMangaById,
    createManga,
    deleteManga,
    editManga,
    buyManga
}

export default mangaAPI 