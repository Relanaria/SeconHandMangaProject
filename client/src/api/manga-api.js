import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/productList';

export const getAllManga = () =>  request.get(BASE_URL);

export const getMangaById = (mangaId) => request.get(`${BASE_URL}/${mangaId}`);

const mangaAPI = {
    getAllManga,
    getMangaById
}

export default mangaAPI 