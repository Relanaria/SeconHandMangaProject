import * as request from "./requester";

const BASE_URL = 'http://localhost:3030/data/';
const directory = 'comments'

const createComment = (commentData, accessToken) => request.post(`${BASE_URL}/${directory}`, commentData, accessToken);

const getComments = (encodedMangaId) => request.get(`${BASE_URL}/comments?where=mangaId%3D${encodedMangaId}`)

const commentsAPI = {
    createComment,
    getComments
}

export default commentsAPI
