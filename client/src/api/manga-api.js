import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data';

export const getAllManga = (directory) =>  request.get(`${BASE_URL}/${directory}`);

export const getMangaById = (directory, mangaId) => request.get(`${BASE_URL}/${directory}/${mangaId}`);

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